/* ============================================================================
   zenital deck — canonical runtime (minimal variant)
   ----------------------------------------------------------------------------
   Drop this verbatim into the <script> block at the bottom of <body> in a deck.
   Three things you MUST set per deck:
     - LAST_SLIDE   (the data-slide value of your closing slide — usually the
                     highest number you have, e.g. '28'). It and slide '01' are
                     skipped when auto-injecting the watermark + ornament.
     - REVEAL_SEQ   (object mapping data-slide → ordered array of reveal keys).
     - CREATED      (full label in the deck's own language, e.g.
                     'creado 16/09/2026', 'creat 16/09/2026' or
                     'created 16/09/2026'). Set it once, when the deck is made,
                     and never again. Leave '' to omit.
     - LAST_UPDATED (same shape, e.g. 'actualizado 21/07/2026',
                     'actualitzat 21/07/2026' or 'updated 21/07/2026' — the
                     runtime never translates or formats either of them, it
                     just inserts them as-is). Set it whenever you touch the
                     deck's content. Leave '' to omit: the HUD keeps its plain
                     static text and nothing renders.
                     A deck built by the portal gets both filled in
                     automatically from what the portal already knows, so
                     these are only yours to set on a hand-built deck.
   One thing you MAY set:
     - PDF_ACTION   (the HUD's print button, in the deck's own language:
                     { label, tip }). The runtime never translates, so a deck
                     that leaves it '' simply has no button in the index and
                     keeps P and the deck menu, which always work.
   Everything else is identical across decks.

   Deep links: the URL hash names the slide (`#05` opens data-slide="05") and
   follows navigation, so any slide can be shared or bookmarked. It is built
   from location.pathname + location.search, never from a relative '#..' href,
   which a <base href> would resolve against the base URL.

   The optional advanced layer (iframe slides + embed-key bridge + DK curve /
   lead-stage / accumulator reveals) lives in deck-runtime-advanced.js.
   ========================================================================== */

const LAST_SLIDE = '33';   // <-- EDIT PER DECK: data-slide of your last slide
const CREATED = 'creado 06/11/2026';        // <-- EDIT PER DECK: e.g. 'creado 16/09/2026', or '' to omit
const LAST_UPDATED = 'actualizado 06/11/2026';   // <-- EDIT PER DECK: e.g. 'actualizado 21/07/2026', or '' to omit

/* <-- EDIT PER DECK: the index's print button, written in the deck's own
   language. Leave label '' to omit it; P and the deck menu still print.
   The tip carries the two settings that decide whether the PDF is usable,
   so it is worth writing even though it is optional. */
const PDF_ACTION = {
  label: 'Descargar PDF de la presentación',
  tip: 'En el diálogo de impresión: <strong>orientación horizontal</strong> y desmarca <strong>"Encabezados y pies de página"</strong>.',
};

const REVEAL_SEQ = {
  '02': ['h-1', 'h-2', 'h-3'],
  '04': ['m-1', 'm-2', 'm-3', 'm-4'],
  '05': ['s-1', 's-2'],
  '06': ['t-1', 't-2', 't-3', 't-4'],
  '07': ['f-1', 'f-2'],
  '08': ['r-1', 'r-2'],
  '09': ['c-1', 'c-2', 'c-3'],
  '11': ['e1-1', 'e1-2', 'e1-3', 'e1-4'],
  '12': ['q1-1', 'q1-2', 'q1-3', 'q1-4'],
  '14': ['v-1', 'v-2'],
  '15': ['rag-1', 'rag-2', 'rag-3', 'rag-4', 'rag-5'],
  '16': ['p-1', 'p-2', 'p-3', 'p-4'],
  '17': ['g-1', 'g-2'],
  '18': ['e2-1', 'e2-2', 'e2-3', 'e2-4'],
  '19': ['q2-1', 'q2-2', 'q2-3', 'q2-4'],
  '21': ['venn-1', 'venn-2', 'venn-3'],
  '22': ['d-1', 'd-2', 'd-3', 'd-4'],
  '24': ['x-1', 'x-2'],
  '25': ['a-1', 'a-2', 'a-3', 'a-4', 'a-5'],
  '26': ['e3-1', 'e3-2', 'e3-3', 'e3-4'],
  '27': ['q3-1', 'q3-2', 'q3-3', 'q3-4'],
  '28': ['k-1', 'k-2', 'k-3', 'k-4'],
  '29': ['l-1', 'l-2', 'l-3'],
  '30': ['w-1', 'w-2'],
  '31': ['mm-1', 'mm-2'],
  '32': ['n-1', 'n-2', 'n-3', 'n-4'],
  '33': ['cl-eye', 'cl-claim', 'cl-sub', 'cl-th', 'cl-logo'],
};

/* ---------- Auto-inject brand chrome (watermark + ornament) -------------- */
(function injectChrome() {
  const ornamentSvg = `<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1.5">
      <ellipse cx="300" cy="300" rx="280" ry="200"/>
      <ellipse cx="300" cy="300" rx="220" ry="160"/>
      <ellipse cx="300" cy="300" rx="160" ry="120"/>
      <ellipse cx="300" cy="300" rx="100" ry="80"/>
    </g>
  </svg>`;
  document.querySelectorAll('.slide').forEach(slide => {
    const dn = slide.dataset.slide;
    if (dn === '01' || dn === LAST_SLIDE) return;
    if (slide.dataset.iframe) return;                  // advanced layer handles these
    if (!slide.querySelector('.watermark')) {
      const wm = document.createElement('div');
      wm.className = 'watermark';
      const isDark = slide.classList.contains('dark') || slide.classList.contains('black');
      wm.innerHTML = `<img src="assets/zenital-icon-${isDark ? 'foam' : 'blue'}.svg" alt="">`;
      slide.appendChild(wm);
    }
    if (!slide.classList.contains('black') && !slide.querySelector('.ornament')) {
      const orn = document.createElement('div');
      orn.className = 'ornament';
      orn.style.color = slide.classList.contains('dark') ? '#5B66AB' : '#00117D';
      orn.innerHTML = ornamentSvg;
      slide.insertBefore(orn, slide.firstChild);
    }
  });
})();

/* ---------- Slide list (supports soft-delete via -removed suffix) -------- */
const slides = Array.from(document.querySelectorAll('.slide'))
  .filter(s => !/-removed$/.test(s.dataset.slide || ''));
const total = slides.length;
let idx = 0;
let revealStep = 0;

/* ---------- Core navigation --------------------------------------------- */
function show(i) {
  if (i < 0 || i >= total) return;
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
  const deckEl = document.getElementById('deck');
  deckEl.classList.remove('bg-dark', 'bg-black');
  if (slides[i].classList.contains('black')) deckEl.classList.add('bg-black');
  else if (slides[i].classList.contains('dark')) deckEl.classList.add('bg-dark');
  idx = i;
  revealStep = 0;
  resetRevealsOnSlide(slides[i]);
  enterSlide(slides[i]);
  refreshHud();
  refreshRail();
  syncHash();
}

/* A slide arrives composed, rather than being clicked into existence.
   Everything marked as a reveal that is NOT a registered step in REVEAL_SEQ
   plays on entry, staggered. That is what makes a short REVEAL_SEQ safe: a
   block loses its click without losing its entrance, and a figure whose
   drawing hangs off .on still draws. A deck that registers every one of its
   reveals behaves exactly as it did before, because nothing is left to
   auto-play.
   prefers-reduced-motion lands everything at once instead. */
function enterSlide(slide) {
  const manual = new Set(REVEAL_SEQ[slide.dataset.slide] || []);
  const auto = [...slide.querySelectorAll('.reveal, .reveal-fade, .reveal-scale')]
    .filter(el => !manual.has(el.dataset.rev));
  // legacy program rows, keyed row-N -> [data-row="N"]
  slide.querySelectorAll('.program-row').forEach(r => {
    if (!manual.has('row-' + r.dataset.row)) auto.push(r);
  });
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  auto.forEach((el, i) => {
    if (still) { el.classList.add('on'); return; }
    setTimeout(() => {
      // the deck may have moved on while this was queued
      if (slide.classList.contains('active')) el.classList.add('on');
    }, 90 + i * 70);
  });
}

function resetRevealsOnSlide(slide) {
  slide.querySelectorAll('.reveal.on, .reveal-fade.on, .reveal-scale.on')
    .forEach(el => el.classList.remove('on'));
  // legacy hook used by Forcadell's "program-row" reveal pattern
  slide.querySelectorAll('.program-row.on').forEach(r => r.classList.remove('on'));
}

/* One step, every element that carries its key.
   It used to be querySelector, so a key could only ever light one thing and a
   step that belongs to two places on the slide, a paragraph and the drawing it
   describes, needed two clicks to say one thing. A key with a single element
   behaves exactly as before. */
function applyReveal(slide, key) {
  const targets = slide.querySelectorAll(`[data-rev="${key}"]`);
  if (targets.length) { targets.forEach(el => el.classList.add('on')); return; }
  // legacy fallback for "row-N" → [data-row="N"]
  if (key.startsWith('row-')) {
    const n = parseInt(key.split('-')[1], 10);
    const row = slide.querySelector(`[data-row="${n}"]`);
    if (row) row.classList.add('on');
  }
}

function unapplyReveal(slide, key) {
  // mirror of applyReveal, used by prev() to retract the last step
  const targets = slide.querySelectorAll(`[data-rev="${key}"]`);
  if (targets.length) { targets.forEach(el => el.classList.remove('on')); return; }
  // legacy fallback for "row-N" → [data-row="N"]
  if (key.startsWith('row-')) {
    const n = parseInt(key.split('-')[1], 10);
    const row = slide.querySelector(`[data-row="${n}"]`);
    if (row) row.classList.remove('on');
  }
}

function next() {
  const slide = slides[idx];
  const seq = REVEAL_SEQ[slide.dataset.slide] || [];
  if (revealStep < seq.length) {
    applyReveal(slide, seq[revealStep]);
    revealStep++;
    return;
  }
  if (idx < total - 1) show(idx + 1);
}

/* Back takes back one step, not the whole build. Overshooting by a click in
   front of a room used to mean replaying the entire slide. */
function prev() {
  const slide = slides[idx];
  if (revealStep > 0) {
    revealStep--;
    const seq = REVEAL_SEQ[slide.dataset.slide] || [];
    unapplyReveal(slide, seq[revealStep]);
    return;
  }
  if (idx > 0) show(idx - 1);
}

/* ---------- HUD overlay (index of slides) ------------------------------- */
function buildHud() {
  const list = document.getElementById('hud-list');
  if (!list) return;
  list.innerHTML = '';
  slides.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'hud-item';
    item.dataset.idx = i;
    // Section dividers and other punctuation slides opt out of the index with
    // data-hud="skip". Hidden rather than skipped, so this list stays index-
    // aligned with `slides` for the is-current highlight.
    if (s.dataset.hud === 'skip') item.style.display = 'none';
    const num = String(i + 1).padStart(2, '0');
    item.innerHTML = `
      <div class="hn">${num}</div>
      <div class="ht">${s.dataset.title || ''}</div>
      <div class="hsec">${s.dataset.section || ''}</div>
    `;
    item.addEventListener('click', () => { show(i); toggleHud(false); });
    list.appendChild(item);
  });
  buildHudAction(list);
}

/* The index's own print button, injected after the slide list.
   Somebody who opened the index to see the whole deck is exactly who wants
   the PDF, so the action belongs here as well as in the deck menu. Opt-in
   per deck, because the runtime does not translate and a button in the wrong
   language is worse than no button. Injected rather than written into every
   deck's HTML, so the markup cannot drift the way the older hand-built decks
   did. */
function buildHudAction(list) {
  const hud = list.parentElement;
  if (!hud || !PDF_ACTION.label || hud.querySelector('.hud-action')) return;
  const btn = document.createElement('button');
  btn.className = 'hud-action';
  btn.innerHTML = `${PDF_ACTION.label}<span class="ha-key">P</span>`;
  btn.addEventListener('click', () => { toggleHud(false); window.print(); });
  hud.appendChild(btn);
  if (PDF_ACTION.tip) {
    const tip = document.createElement('div');
    tip.className = 'hud-tip';
    tip.innerHTML = PDF_ACTION.tip;
    hud.appendChild(tip);
  }
}
function refreshHud() {
  document.querySelectorAll('.hud-item').forEach((el, i) => {
    el.classList.toggle('is-current', i === idx);
  });
}
function toggleHud(force) {
  const hud = document.getElementById('hud');
  if (!hud) return;
  const open = force === undefined ? !hud.classList.contains('visible') : force;
  hud.classList.toggle('visible', open);
}
buildHud();
refreshHud();

/* ---------- HUD date stamps (opt-in, injected) ---------------------------
   Folds CREATED and LAST_UPDATED, in that order, into the static .hud-sub
   line as its middle segments. Never touches deck HTML, never translates or
   formats either: decks that leave both empty keep the plain
   "índice · pulsa ESC o M para volver" text untouched, and a deck that sets
   only LAST_UPDATED renders exactly what it did before this existed.

   Reading order is oldest first, so "creado 16/09/2026 · actualizado
   21/07/2026" tells you the age of the thing and then the age of the version
   you are looking at. */
(function stampDates() {
  const stamps = [CREATED, LAST_UPDATED].filter(Boolean);
  if (!stamps.length) return;
  const sub = document.querySelector('.hud-sub');
  if (!sub) return;
  const parts = sub.textContent.trim().split('·').map((s) => s.trim());
  if (parts.length < 2) return;
  parts.splice(1, 0, ...stamps);
  sub.textContent = parts.join(' · ');
})();

/* ---------- Section rail (wayfinding, injected) --------------------------
   One segment per consecutive data-section group, sized by slide count.
   Purely informative: past sections read filled, the current one fills as
   the presenter advances. Hidden on the cover and the closing slide. */
const railGroups = [];
slides.forEach((s, i) => {
  const sec = s.dataset.section || '';
  const last = railGroups[railGroups.length - 1];
  if (last && last.section === sec) last.count++;
  else railGroups.push({ section: sec, start: i, count: 1 });
});
(function buildRail() {
  const deckEl = document.getElementById('deck');
  if (!deckEl || railGroups.length < 2) return;
  const rail = document.createElement('div');
  rail.id = 'section-rail';
  railGroups.forEach(g => {
    const seg = document.createElement('span');
    seg.className = 'rail-seg';
    seg.style.setProperty('--n', g.count);
    seg.innerHTML = '<span class="rail-fill"></span>';
    rail.appendChild(seg);
  });
  deckEl.appendChild(rail);
})();
function refreshRail() {
  const rail = document.getElementById('section-rail');
  if (!rail) return;
  const dn = slides[idx].dataset.slide;
  rail.classList.toggle('rail-hidden', idx === 0 || dn === LAST_SLIDE);
  rail.querySelectorAll('.rail-seg').forEach((seg, gi) => {
    const g = railGroups[gi];
    const fill = seg.firstElementChild;
    if (idx >= g.start + g.count) fill.style.width = '100%';
    else if (idx < g.start) fill.style.width = '0';
    else fill.style.width = (((idx - g.start + 1) / g.count) * 100) + '%';
  });
}

/* ---------- Deck menu (actions + always-available key legend) -----------
   Injected bottom-right: collapsed dot button; open panel exposes index /
   fullscreen / save-pdf with their shortcut keys plus the navigation
   legend. Supersedes the auto-fading #help-hint. */
(function buildDeckMenu() {
  if (document.getElementById('deck-menu')) return;
  const menu = document.createElement('div');
  menu.id = 'deck-menu';
  menu.innerHTML = `
    <div class="dm-panel" role="menu">
      <button class="dm-item" data-act="hud"><span>index</span><kbd>M</kbd></button>
      <button class="dm-item" data-act="full"><span>fullscreen</span><kbd>F</kbd></button>
      <button class="dm-item" data-act="pdf" title="in the print dialog: landscape orientation, save as PDF"><span>save pdf</span><kbd>P</kbd></button>
      <div class="dm-hint"><span>navigate</span><span>&#8592; &#8594; &middot; click</span></div>
    </div>
    <button class="dm-toggle" aria-label="deck menu" title="menu">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/>
      </svg>
    </button>`;
  document.body.appendChild(menu);
  // Clicks on the menu must never advance the deck or bubble to the closer.
  menu.addEventListener('click', (e) => e.stopPropagation());
  menu.querySelector('.dm-toggle').addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  document.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('.dm-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      menu.classList.remove('open');
      const act = btn.dataset.act;
      if (act === 'hud') toggleHud();
      else if (act === 'pdf') window.print();
      else if (act === 'full') {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    });
  });
  const hint = document.getElementById('help-hint');
  if (hint) hint.style.display = 'none';
})();

/* ---------- Input handlers ---------------------------------------------- */
document.addEventListener('keydown', (e) => {
  const hudOpen = document.getElementById('hud')?.classList.contains('visible');
  if (hudOpen) {
    if (e.key === 'Escape' || e.key === 'm' || e.key === 'M' || e.key === 'Tab') {
      toggleHud(false); e.preventDefault(); return;
    }
    return;
  }
  switch (e.key) {
    case 'ArrowRight': case 'PageDown': case ' ':
      next(); e.preventDefault(); break;
    case 'ArrowLeft': case 'PageUp':
      prev(); e.preventDefault(); break;
    case 'Home': show(0); e.preventDefault(); break;
    case 'End':  show(total - 1); e.preventDefault(); break;
    case 'Escape': toggleHud(); e.preventDefault(); break;
    case 'm': case 'M': case 'Tab':
      toggleHud(); e.preventDefault(); break;
    case 'f': case 'F':
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
      e.preventDefault(); break;
    case 'p': case 'P':
      window.print(); e.preventDefault(); break;
  }
});

document.getElementById('deck')?.addEventListener('click', (e) => {
  if (document.getElementById('hud')?.classList.contains('visible')) return;
  if (e.target.closest && e.target.closest('iframe')) return;     // ignore iframe clicks
  // A link or a button does its own thing: following a link out of the deck
  // (a sample, a share link) must not also move the deck on a slide.
  if (e.target.closest && e.target.closest('a[href], button')) return;
  next();
});

/* ---------- Touch navigation (swipe left = next, swipe right = prev) -----
   Tap keeps the click-to-advance behaviour above (a real swipe suppresses the
   click). Ignores touches that start on the deck menu, the HUD or links. */
let _swipeX = null, _swipeY = null;
window.addEventListener('touchstart', (e) => {
  if (e.touches.length !== 1) { _swipeX = null; return; }
  if (e.target.closest && e.target.closest('#deck-menu, #hud, a, button, iframe')) { _swipeX = null; return; }
  _swipeX = e.touches[0].clientX;
  _swipeY = e.touches[0].clientY;
}, { passive: true });
window.addEventListener('touchend', (e) => {
  if (_swipeX === null) return;
  const dx = e.changedTouches[0].clientX - _swipeX;
  const dy = e.changedTouches[0].clientY - _swipeY;
  _swipeX = null;
  if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.4) return;   // not a horizontal swipe
  if (dx < 0) next(); else prev();
}, { passive: true });

/* ---------- Fit the deck to the window ----------------------------------
   One mode: the deck renders at its 1280x720 reference canvas and the whole
   canvas is scaled to the window (#deck.fit-scale).

   WHY, and it is not only about phones. The kit sizes every type token with
   clamp(min, N cqw, max). The container units track the box correctly, but
   the clamp MAXIMA are absolute pixels: 12px, 13px, 15px. On a 1280 wide
   box, 0.85cqw is 10.9px and the clamp sits in its fluid middle. On a 2560
   wide box, 0.85cqw is 21.8px and the clamp pins it at 13px. The type stops
   growing while the slide keeps growing, so the bigger the screen, the
   smaller everything reads, and a deck that is right on a laptop is thin and
   lost on a hall projector. Scaling one fixed canvas resolves every clamp
   once, at the size the deck was designed for, and a slide is then
   proportionally identical at any size. transform: scale is vector, so the
   type is not softened by it.

   It also retires the two problems the old two-mode version existed to
   dodge: below the old breakpoint the px floors overflowed the box, and in a
   window taller than 16:9 vh sizes overshot the shorter box. Neither can
   happen to a canvas of fixed size.

   The cost: inside the canvas, 1vh is still 1% of the WINDOW, not of the
   slide, so a per-deck <style> block that sizes in vh no longer tracks the
   slide. Size per-deck rules in cqw/cqh, which is what style-presentation.md
   already asks for. .fit-h and its CSS stay for a deck that cannot yet.

   ======================================================================== */
/* A module card caps its height (see .module-card), so copy longer than the
   design has room for used to spill over the card below it and now clips.
   Neither is acceptable in front of a client, so the type steps down inside
   the card instead. Shrinking re-wraps the text, narrower lines and fewer of
   them, so the height falls roughly with the square of the factor: sqrt() of
   the overflow ratio lands close on the first pass and the loop measures
   again rather than trusting the estimate. Floor at half the base, past
   which the card is unreadable and the copy belongs on its own slide.

   The same guard covers the agenda (.program-wrap), the case study
   (.case-wrap) and the pricing table (.ptab-wrap): all are bounded by the
   slide and fed by a proposal with as many rows or as much copy as the
   wizard holds. The CSS of each block decides what --fit zooms; here it is
   only measured and set. */
const FIT_SELECTOR = '.module-card, .program-wrap, .case-wrap, .price-card, .ptab-wrap, .zp-fit';
function fitCards() {
  document.querySelectorAll(FIT_SELECTOR).forEach((card) => {
    card.style.removeProperty('--fit');
    let f = 1;
    for (let i = 0; i < 8 && f > 0.5 && card.scrollHeight > card.clientHeight + 2; i++) {
      f = Math.max(0.5, f * Math.min(0.97, Math.sqrt(card.clientHeight / card.scrollHeight)));
      card.style.setProperty('--fit', f.toFixed(3));
    }
  });
}
const FIT_REF_W = 1280, FIT_REF_H = 720;
function fitDeck() {
  const deckEl = document.getElementById('deck');
  if (!deckEl) return;
  /* Print owns its own geometry: the print block names #deck.fit-scale and
     clears the transform, but the class is left off entirely so nothing has
     to be undone on the page the printer sees. */
  if (window.matchMedia && window.matchMedia('print').matches) return;
  deckEl.classList.remove('fit-h');
  deckEl.style.removeProperty('--deck-fit');
  deckEl.classList.add('fit-scale');
  deckEl.style.setProperty(
    '--deck-scale',
    Math.min(window.innerWidth / FIT_REF_W, window.innerHeight / FIT_REF_H),
  );
}

/* Every box the cards measure against has just changed size. Coalesced into
   one pass per frame: a drag-resize fires resize far faster than a layout
   read of every card can answer. */
let _fitQueued = false;
function refit() {
  fitDeck();
  if (_fitQueued) return;
  _fitQueued = true;
  requestAnimationFrame(() => { _fitQueued = false; fitCards(); });
}
window.addEventListener('resize', refit);
/* Webfonts change every measurement, so the first pass runs again once they
   are in. */
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitCards);

/* Paper is a different box: the page instead of the window, and a slide that
   is 188mm inside it. A factor measured on screen does not hold there, and
   the card clipped in the PDF. Chrome lays the page out before the media
   query flips, so measuring on the change gives print geometry; beforeprint
   and afterprint cover the browsers that only fire those. */
window.addEventListener('beforeprint', fitCards);
window.addEventListener('afterprint', fitCards);
if (window.matchMedia) {
  const mqPrint = window.matchMedia('print');
  if (mqPrint.addEventListener) mqPrint.addEventListener('change', fitCards);
  else if (mqPrint.addListener) mqPrint.addListener(fitCards);
}

/* ---------- Help-hint auto-fade ---------------------------------------- */
setTimeout(() => {
  const h = document.getElementById('help-hint');
  if (h) h.style.opacity = '0';
}, 8000);

/* ---------- Deep links (#NN opens data-slide="NN") -----------------------
   The hash follows navigation through history.replaceState, so it adds no
   history entries and never scrolls. The URL is rebuilt from pathname +
   search: a relative '#05' href resolves against <base href> (the portal's
   /share/<token>/ and /v/<slug>/ pages), which would leave the deck.
   A hash that names no slide is ignored and left as the visitor typed it.
   A slide opened from the hash shows all its REVEAL_SEQ steps at once.
   Off in the presenter's ?preview and ?presenter windows and while printing.
   The first slide is opened once the document has loaded, so the advanced
   layer's show() patch (iframe slides) is already in place. */
const _deepParams = new URLSearchParams(location.search);
const _deepOn = !_deepParams.has('preview') && !_deepParams.has('presenter');
let _deepReady = false;
function slideFromHash(hash) {
  const m = /^#(\d+)$/.exec(hash);
  return m ? slides.findIndex(s => s.dataset.slide === m[1]) : -1;
}
function syncHash() {
  if (!_deepOn || !_deepReady || !slides[idx]) return;
  if (window.matchMedia && window.matchMedia('print').matches) return;
  const hash = '#' + slides[idx].dataset.slide;
  if (location.hash === hash) return;
  try { history.replaceState(history.state, '', location.pathname + location.search + hash); }
  catch (_) {}
}
/* A slide opened from the address arrives complete: whoever follows a link
   (a newsletter, a bookmark) has no presenter clicking the steps in. Back
   still retracts them one by one; forward goes to the next slide. */
function goToHash() {
  const i = slideFromHash(location.hash);
  if (i < 0) return;
  if (i !== idx) show(i);
  const seq = REVEAL_SEQ[slides[i].dataset.slide] || [];
  seq.slice(revealStep).forEach(key => applyReveal(slides[i], key));
  revealStep = seq.length;
}
function bootDeepLinks() {
  if (!_deepOn) return;
  goToHash();
  _deepReady = true;
  window.addEventListener('hashchange', goToHash);
  // In-page #NN links: handled here so <base href> cannot send them elsewhere.
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const i = slideFromHash(a.getAttribute('href'));
    if (i < 0) return;
    e.preventDefault(); e.stopPropagation();
    if (i !== idx) show(i);
  }, true);
}

/* ---------- Boot -------------------------------------------------------- */
fitDeck();
fitCards();
show(0);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootDeepLinks);
else bootDeepLinks();