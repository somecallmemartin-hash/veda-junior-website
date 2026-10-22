/* Pinch and pan only the photo; never scale the gallery's compositing layers. */
(() => {
  const box = document.getElementById('lightbox');
  const image = document.getElementById('big');
  const pointers = new Map();
  let scale = 1, x = 0, y = 0, frame = 0, gesture = null;
  let savedScroll = 0, savedTop = '', opener = null, active = false;
  let suppressClickUntil = 0;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  function paint() {
    frame = 0;
    const maxX = Math.max(0, (image.clientWidth * scale - box.clientWidth) / 2);
    const maxY = Math.max(0, (image.clientHeight * scale - box.clientHeight) / 2);
    x = clamp(x, -maxX, maxX);
    y = clamp(y, -maxY, maxY);
    image.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')';
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
  function reset() {
    pointers.clear();
    gesture = null;
    scale = 1; x = 0; y = 0;
    if (frame) cancelAnimationFrame(frame);
    paint();
  }
  function begin() {
    const points = [...pointers.values()];
    const rect = image.getBoundingClientRect();
    const center = {x:rect.left + rect.width / 2 - x, y:rect.top + rect.height / 2 - y};
    if (points.length >= 2) {
      const [a,b] = points;
      gesture = {count:2, distance:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y)),
        midX:(a.x+b.x)/2, midY:(a.y+b.y)/2, scale, x, y, center};
      suppressClickUntil = Date.now() + 500;
    } else if (points.length === 1) {
      gesture = {count:1, start:points[0], x, y};
    } else gesture = null;
  }
  box.addEventListener('pointerdown', e => {
    if (e.target.closest('button') || !active || e.pointerType === 'mouse') return;
    pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
    box.setPointerCapture(e.pointerId);
    begin();
  });
  box.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId) || !gesture) return;
    pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
    const points = [...pointers.values()];
    if (gesture.count === 2 && points.length >= 2) {
      const [a,b] = points;
      scale = clamp(gesture.scale * Math.hypot(a.x-b.x,a.y-b.y) / gesture.distance, 1, 4);
      const ratio = scale / gesture.scale;
      x = (a.x+b.x)/2 - gesture.center.x - (gesture.midX-gesture.center.x-gesture.x)*ratio;
      y = (a.y+b.y)/2 - gesture.center.y - (gesture.midY-gesture.center.y-gesture.y)*ratio;
      suppressClickUntil = Date.now() + 500;
    } else if (scale > 1) {
      x = gesture.x + points[0].x - gesture.start.x;
      y = gesture.y + points[0].y - gesture.start.y;
      if (Math.hypot(points[0].x-gesture.start.x,points[0].y-gesture.start.y)>4)
        suppressClickUntil = Date.now() + 500;
    }
    schedule();
  });
  function end(e) {
    if (!pointers.delete(e.pointerId)) return;
    if (frame) { cancelAnimationFrame(frame); paint(); }
    begin();
  }
  ['pointerup','pointercancel','lostpointercapture'].forEach(type => box.addEventListener(type,end));
  box.addEventListener('click', e => {
    if (!e.target.closest('button') && Date.now() < suppressClickUntil) {
      e.preventDefault(); e.stopImmediatePropagation();
    }
  }, true);
  // iOS may also emit native gesture events; scope cancellation to this viewer.
  ['gesturestart','gesturechange','gestureend'].forEach(type =>
    box.addEventListener(type, e => e.preventDefault(), {passive:false}));
  image.addEventListener('load', reset);
  image.addEventListener('dragstart', e => e.preventDefault());
  window.addEventListener('resize', () => { if (active) reset(); });
  window.galleryViewer = {
    open() {
      reset();
      if (active) return;
      active = true;
      savedScroll = window.scrollY;
      savedTop = document.body.style.top;
      opener = document.activeElement;
      document.body.style.top = -savedScroll + 'px';
      document.documentElement.classList.add('photo-viewer-open');
      document.body.classList.add('photo-viewer-open');
      document.getElementById('close').focus({preventScroll:true});
    },
    close() {
      if (!active) return;
      active = false;
      reset();
      image.onerror = null;
      image.removeAttribute('src');
      document.documentElement.classList.remove('photo-viewer-open');
      document.body.classList.remove('photo-viewer-open');
      document.body.style.top = savedTop;
      const previous = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0,savedScroll);
      document.documentElement.style.scrollBehavior = previous;
      if (opener && opener.isConnected) opener.focus({preventScroll:true});
    }
  };
})();
