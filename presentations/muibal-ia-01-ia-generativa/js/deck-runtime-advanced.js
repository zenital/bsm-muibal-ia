/* ============================================================================
   zenital deck — advanced runtime additions
   ----------------------------------------------------------------------------
   Layer this AFTER deck-runtime.js. Only needed for decks that include
   embedded animation iframes (sections like `tech-evolution-24h`). It:
     1. swaps iframe src on slide enter/leave (frees memory between slides)
     2. forwards keypresses from a focused iframe back to the deck
     3. gates "next" on an `embed-finished` postMessage from the iframe

   Contract for iframe content:
     - postMessage({type:'embed-finished'})           // when animation finishes
     - postMessage({type:'embed-key', key, code})     // forward keydown events
     - listen for {type:'embed-advance'}              // host asks to advance
   ========================================================================== */

const embedFinished = {};   // { idxNumber: true } once an iframe reports done

/* Patch show() to manage iframe src lifecycle ---------------------------- */
const _origShow = show;
window.show = function(i) {
  // clear iframe of leaving slide
  const leaving = slides[idx];
  if (leaving && leaving.dataset.iframe) {
    const fr = leaving.querySelector('iframe');
    if (fr) fr.src = '';
  }
  _origShow(i);
  // load iframe of entering slide
  const entering = slides[i];
  if (entering && entering.dataset.iframe) {
    const fr = entering.querySelector('iframe');
    if (fr && !fr.src) fr.src = entering.dataset.iframe;
  }
};

/* Patch next() to gate on embed-finished --------------------------------- */
const _origNext = next;
window.next = function() {
  const slide = slides[idx];
  if (slide && slide.dataset.iframe) {
    if (!embedFinished[idx]) {
      const fr = slide.querySelector('iframe');
      if (fr && fr.contentWindow) {
        try { fr.contentWindow.postMessage({type: 'embed-advance'}, '*'); }
        catch (_) {}
      }
      return;
    }
    if (idx < slides.length - 1) show(idx + 1);
    return;
  }
  _origNext();
};

/* Bridge: receive messages from iframes --------------------------------- */
window.addEventListener('message', (e) => {
  const msg = e.data || {};
  if (!msg || typeof msg !== 'object') return;

  if (msg.type === 'embed-finished') {
    embedFinished[idx] = true;
    return;
  }

  if (msg.type === 'embed-key') {
    const k = msg.key, code = msg.code;
    if (k === 'ArrowLeft' || code === 'PageUp') { prev(); return; }
    if (k === 'Escape' || k === 'm' || k === 'M' || k === 'Tab') { toggleHud(); return; }
    if (k === 'Home') { show(0); return; }
    if (k === 'End')  { show(slides.length - 1); return; }
    if (k === 'f' || k === 'F') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
      return;
    }
    if (k === 'ArrowRight' || code === 'PageDown' || k === 'Enter' ||
        code === 'Space' || k === ' ' || k === 'ArrowDown') {
      next();
      return;
    }
  }
});