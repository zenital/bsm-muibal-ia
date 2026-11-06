/* zenital deck presenter — optional presenter mode for web decks.
 *
 * One file, three roles, chosen by URL:
 *   (no param)    the projected deck. Pressing N opens the presenter window
 *                 and a MutationObserver broadcasts every state change to it.
 *   ?presenter    the presenter window: current slide live (reveals synced),
 *                 next slide fully revealed, the slide's <aside class="notes">,
 *                 a wall clock, an elapsed timer and the slide counter. Arrow
 *                 keys here drive the projected deck.
 *   ?preview      a slave preview: renders one slide on command. Used inside
 *                 the presenter window's two iframes.
 *
 * Install: copy this file next to deck-runtime.js and add, after it,
 *   <script src="js/deck-presenter.js"></script>
 * Notes are optional: <aside class="notes" hidden> ... </aside> inside any
 * <section class="slide">. The hidden attribute keeps them out of projection
 * and print with no CSS dependency.
 *
 * Design constraints this file honours:
 *  - It never touches deck-runtime.js: it reads its globals (show, applyReveal)
 *    and drives navigation by dispatching synthetic keyboard events, so slides
 *    with their own inline drivers (votes, phased animations) behave exactly
 *    as they do with a physical keyboard.
 *  - It works from file:// and from the portal: window.open plus postMessage
 *    with explicit window references, no server, no BroadcastChannel.
 */
(() => {
  const qs = new URLSearchParams(location.search);
  const MODE = qs.has('presenter') ? 'presenter' : qs.has('preview') ? 'preview' : 'deck';

  const slideEls = () => [...document.querySelectorAll('#deck .slide')];
  const activeEl = () => document.querySelector('#deck .slide.active');
  const stateOf = () => {
    const a = activeEl();
    const els = slideEls();
    return {
      type: 'deck-state',
      slide: a?.dataset.slide ?? null,
      i: els.indexOf(a) + 1,
      n: els.length,
      revs: [...(a?.querySelectorAll('[data-rev].on, [data-row].on') ?? [])]
        .map((el) => el.dataset.rev ?? 'row-' + el.dataset.row),
    };
  };

  /* ---------- role: the projected deck ----------------------------------- */
  if (MODE === 'deck') {
    let pw = null;
    let raf = 0;
    const send = () => {
      if (!pw || pw.closed) return;
      cancelAnimationFrame(raf);
      // rAF coalesces the burst of class mutations one navigation produces, but
      // browsers freeze rAF in hidden windows — and on Windows, Chrome marks a
      // fully covered or minimized window hidden (native window occlusion). That
      // is exactly the single-screen rehearsal setup: presenter maximized over
      // the deck. Keys still reach the deck (message events keep firing) and it
      // advances, but the scheduled frame never runs and the presenter freezes.
      // When hidden, skip the coalescing and post synchronously.
      if (document.hidden) { pw.postMessage(stateOf(), '*'); return; }
      raf = requestAnimationFrame(() => pw.postMessage(stateOf(), '*'));
    };
    // Flush a frame scheduled just before the deck went hidden (it would
    // otherwise stay frozen until the deck is visible again).
    document.addEventListener('visibilitychange', () => { if (document.hidden) send(); });
    const deckEl = document.getElementById('deck');
    if (deckEl) new MutationObserver(send).observe(deckEl, { attributes: true, attributeFilter: ['class'], subtree: true });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'n' && e.key !== 'N') return;
      if (document.getElementById('hud')?.classList.contains('visible')) return;
      e.preventDefault();
      if (pw && !pw.closed) { pw.focus(); return; }
      pw = window.open(location.pathname + '?presenter', 'deck-presenter', 'width=1240,height=760');
    });
    window.addEventListener('message', (e) => {
      const d = e.data || {};
      if (d.type === 'presenter-hello') { pw = e.source; send(); }
      else if (d.type === 'presenter-key')
        document.dispatchEvent(new KeyboardEvent('keydown', { key: d.key, bubbles: true, cancelable: true }));
    });
    return;
  }

  /* ---------- role: slave preview (inside the presenter's iframes) ------- */
  if (MODE === 'preview') {
    const style = document.createElement('style');
    style.textContent = '#deck-menu,#help-hint,#hud{display:none!important}';
    document.head.appendChild(style);
    window.addEventListener('message', (e) => {
      const d = e.data || {};
      if (d.type !== 'deck-goto') return;
      const els = slideEls();
      const i = els.findIndex((s) => s.dataset.slide === d.slide);
      if (i < 0) return;
      show(i); // deck-runtime global
      if (d.allRevs) els[i].querySelectorAll('[data-rev],[data-row]').forEach((el) => el.classList.add('on'));
      else for (const k of d.revs ?? []) applyReveal(els[i], k); // deck-runtime global
    });
    parent.postMessage({ type: 'preview-ready' }, '*');
    return;
  }

  /* ---------- role: the presenter window --------------------------------- */
  const opener = window.opener;
  document.title = 'presenter · ' + document.title;

  // The deck's own DOM stays (notes are read from it) but never shows, and
  // the runtime's key handling is preempted in the capture phase below.
  const stage = document.getElementById('stage');
  if (stage) stage.style.display = 'none';
  document.querySelectorAll('#deck-menu, #help-hint, #hud').forEach((el) => (el.style.display = 'none'));

  const ui = document.createElement('div');
  ui.id = 'presenter';
  ui.innerHTML = `
  <style>
    #presenter{position:fixed;inset:0;background:#0A1030;color:#FEFDF7;z-index:99999;
      display:grid;grid-template-columns:1fr 340px;grid-template-rows:1fr auto;gap:14px;padding:14px;
      font-family:'Libre Franklin',system-ui,sans-serif}
    #presenter .pr-main{grid-row:1;display:flex;flex-direction:column;min-width:0;min-height:0}
    #presenter .pr-main .pr-frame{margin:auto 0}  /* centre the leftover height */
    #presenter .pr-side{grid-row:1;display:flex;flex-direction:column;gap:12px;min-width:0}
    #presenter .pr-tag{font-family:'PT Mono',monospace;font-size:10px;letter-spacing:.2em;
      text-transform:uppercase;color:#999ECC;margin:0 0 6px}
    #presenter .pr-frame{position:relative;width:100%;background:#000;border:1px solid #344097;
      border-radius:3px;overflow:hidden}
    #presenter .pr-frame::after{content:'';position:absolute;inset:0}  /* swallow clicks */
    #presenter .pr-frame iframe{width:1280px;height:720px;border:0;transform-origin:0 0}
    #presenter .pr-notes{flex:1;overflow:auto;background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.12);border-left:4px solid #E8556A;border-radius:3px;
      padding:14px 16px;font-size:15px;line-height:1.55;color:#FEFDF7}
    #presenter .pr-notes p{margin:0 0 .7em}
    #presenter .pr-notes em{color:#999ECC}
    #presenter .pr-notes .pr-empty{color:#5B66AB;font-style:italic}
    #presenter .pr-foot{grid-column:1/-1;grid-row:2;display:flex;align-items:baseline;gap:26px;
      border-top:1px solid #344097;padding-top:10px}
    #presenter .pr-count{font-family:'Literata',serif;font-weight:700;font-size:26px}
    #presenter .pr-title{font-size:15px;color:#999ECC;flex:1;min-width:0;white-space:nowrap;
      overflow:hidden;text-overflow:ellipsis}
    #presenter .pr-clock,#presenter .pr-elapsed{font-family:'PT Mono',monospace;font-size:20px}
    #presenter .pr-elapsed{color:#E8556A;cursor:pointer}
    #presenter .pr-keys{font-family:'PT Mono',monospace;font-size:10px;color:#5B66AB;letter-spacing:.08em}
    #presenter .pr-wait{grid-column:1/-1;align-self:center;justify-self:center;text-align:center;
      font-size:17px;color:#999ECC}
  </style>
  ${opener ? `
  <div class="pr-main">
    <p class="pr-tag">en pantalla</p>
    <div class="pr-frame" id="pr-cur"><iframe src="${location.pathname}?preview"></iframe></div>
  </div>
  <div class="pr-side">
    <div>
      <p class="pr-tag">siguiente</p>
      <div class="pr-frame" id="pr-next"><iframe src="${location.pathname}?preview"></iframe></div>
    </div>
    <p class="pr-tag" style="margin-top:2px">notas</p>
    <div class="pr-notes" id="pr-notes"></div>
  </div>
  <div class="pr-foot">
    <span class="pr-count" id="pr-count">–</span>
    <span class="pr-title" id="pr-title"></span>
    <span class="pr-elapsed" id="pr-elapsed" title="clic para poner a cero">00:00</span>
    <span class="pr-clock" id="pr-clock"></span>
    <span class="pr-keys">&#8592; &#8594; avanzar · T cronómetro a cero</span>
  </div>` : `
  <div class="pr-wait">Esta ventana se abre desde el deck: pulsa <strong>N</strong> con la presentación abierta.</div>`}
  `;
  document.body.appendChild(ui);
  if (!opener) return;

  // The side preview is width bound; the main one must also respect the
  // height of its column, which in a landscape window is the tighter axis.
  const scale = (f, s) => {
    f.style.width = 1280 * s + 'px';
    f.style.height = 720 * s + 'px';
    f.querySelector('iframe').style.transform = `scale(${s})`;
  };
  const fit = () => {
    const side = ui.querySelector('#pr-next');
    scale(side, side.parentElement.clientWidth / 1280);
    const main = ui.querySelector('#pr-cur');
    const col = main.parentElement;
    const availH = col.clientHeight - (col.querySelector('.pr-tag')?.offsetHeight ?? 0) - 8;
    scale(main, Math.min(col.clientWidth / 1280, Math.max(availH, 120) / 720));
  };
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);

  let last = null;
  const ids = slideEls().map((s) => s.dataset.slide);
  const post = (frameId, msg) => ui.querySelector(`#${frameId} iframe`)?.contentWindow?.postMessage(msg, '*');
  const render = () => {
    if (!last) return;
    post('pr-cur', { type: 'deck-goto', slide: last.slide, revs: last.revs });
    const nextId = ids[ids.indexOf(last.slide) + 1];
    if (nextId) post('pr-next', { type: 'deck-goto', slide: nextId, allRevs: true });
    ui.querySelector('#pr-count').textContent = `${last.i} / ${last.n}`;
    const sec = document.querySelector(`#deck .slide[data-slide="${last.slide}"]`);
    ui.querySelector('#pr-title').textContent =
      (sec?.dataset.title ?? '') + (nextId ? '' : ' · última slide');
    const notes = sec?.querySelector('aside.notes');
    ui.querySelector('#pr-notes').innerHTML =
      notes?.innerHTML.trim() || '<p class="pr-empty">sin notas para esta slide</p>';
  };

  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === 'deck-state') { last = d; render(); }
    else if (d.type === 'preview-ready') render();
  });

  // Keys drive the projected deck; capture phase so the runtime's own handler
  // (still alive on the hidden deck DOM) never sees them.
  const FORWARD = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', ' ', 'PageDown', 'PageUp', 'Home', 'End'];
  document.addEventListener('keydown', (e) => {
    e.stopImmediatePropagation();
    if (FORWARD.includes(e.key)) {
      e.preventDefault();
      opener.postMessage({ type: 'presenter-key', key: e.key }, '*');
    } else if (e.key === 't' || e.key === 'T') {
      t0 = Date.now();
    }
  }, true);

  // Clock and elapsed timer.
  let t0 = Date.now();
  const two = (n) => String(n).padStart(2, '0');
  ui.querySelector('#pr-elapsed').addEventListener('click', () => (t0 = Date.now()));
  setInterval(() => {
    const now = new Date();
    ui.querySelector('#pr-clock').textContent = `${two(now.getHours())}:${two(now.getMinutes())}`;
    const s = Math.floor((Date.now() - t0) / 1000);
    ui.querySelector('#pr-elapsed').textContent =
      (s >= 3600 ? Math.floor(s / 3600) + ':' : '') + two(Math.floor(s / 60) % 60) + ':' + two(s % 60);
  }, 1000);

  opener.postMessage({ type: 'presenter-hello' }, '*');
})();
