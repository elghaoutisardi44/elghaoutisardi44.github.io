/* =====================================================================
   js/apropos.js : PAGE a-propos.html (compteurs animés)
   ---------------------------------------------------------------------
   Kola <b data-count="150" data-suffix="+"> kaybda mn 0 w ytl3 l 150
   mnin kaybda ybano f l écran (IntersectionObserver).
   ===================================================================== */

function count(el) {
  const to = +el.dataset.count, suf = el.dataset.suffix || "";
  if (reduce) { el.textContent = to + suf; return; }     // bla animation ila mkhtar hakka
  const t0 = performance.now();
  (function step(t) {
    const k = Math.min((t - t0) / 1200, 1);              // 0 -> 1 f 1.2 sanya
    el.textContent = Math.round(to * k) + (k === 1 ? suf : "");
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { count(en.target); io.unobserve(en.target); }  // yt3ml mra wa7da
}), { threshold: .6 });
document.querySelectorAll("[data-count]").forEach(el => io.observe(el));
