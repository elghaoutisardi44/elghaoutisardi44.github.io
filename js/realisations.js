/* =====================================================================
   js/realisations.js : PAGE realisations.html (filtres dyal projets)
   ---------------------------------------------------------------------
   Kola projet (<article class="proj">) 3ndo data-cat="ind|sol|ecl|inc".
   Kola bouton filtre 3ndo data-f b nafs l9iyam (wla "all").
   Mnin tcliki 3la filtre, kan-khbbiw (class "hide") l projets li ma
   mtabqinch m3ah.
   ===================================================================== */

$("filters").addEventListener("click", e => {
  const f = e.target.dataset.f;                 // ex: "sol"
  if (!f) return;                               // ila ma cliqitich 3la bouton
  document.querySelectorAll("#filters button")
    .forEach(b => b.classList.toggle("on", b === e.target));      // bouton mkhtar ytlwn
  document.querySelectorAll(".proj")
    .forEach(p => p.classList.toggle("hide", f !== "all" && p.dataset.cat !== f));
});
