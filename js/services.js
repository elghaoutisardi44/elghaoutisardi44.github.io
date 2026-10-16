/* =====================================================================
   js/services.js : PAGE services.html (tabs interactifs)
   ---------------------------------------------------------------------
   Kay3tamed 3la SERVICES li f data.js (khassha t7ml 9bl had l fichier).
   Chno kaydir:
     1) kayb-ni 5 tabs (boutons) men SERVICES
     2) mnin tcliki 3la tab, kay3rd panel dyal had khidma
     3) bouton "Demander un devis" kaydkhlk l contact.html m3a l khidma mkhtara
   Bonus: services.html#sol kay7ll mn lowl 3la solaire (l liens dyal accueil)
   ===================================================================== */

const tabs = $("tabs"), panel = $("panel");

// 1) N3mmro l tabs men l données
Object.entries(SERVICES).forEach(([k, v]) => {
  const b = document.createElement("button");     // kan-sawbo bouton jdid
  b.className = "tab";
  b.role = "tab";
  b.dataset.k = k;                                // kan7to l clé (cfo, sol...) f data-k bach n3rfouha mn be3d
  b.style.setProperty("--c", v.c);                // lon dyal had khidma (CSS kay-st3ml var(--c))
  b.innerHTML = `${v.tab}<small>${v.sub}</small>`;
  tabs.appendChild(b);                            // kanzidouh f page
});

// 2) N3rdo panel dyal khidma
function showService(k, animate = true) {
  const v = SERVICES[k];
  // aria-selected=true => CSS kay-lowwn tab mkhtara b navy
  tabs.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-selected", b.dataset.k === k));
  panel.style.setProperty("--c", v.c);
  panel.innerHTML = `<h3>${v.tab}</h3><p>${v.intro}</p>
    <div class="two">
      <div><h4>Ce que nous faisons</h4><ul>${v.items.map(i => `<li>${i}</li>`).join("")}</ul></div>
      <div><h4>Déroulement</h4><ul class="steps">${v.steps.map(i => `<li>${i}</li>`).join("")}</ul></div>
    </div>
    <a class="btn btn-main" href="contact.html?service=${k}">Demander un devis pour ce service</a>`;
  // Animation sghira ghir ila l utilisateur ma mn3ha-ch
  if (animate && !reduce) { panel.classList.remove("swap"); void panel.offsetWidth; panel.classList.add("swap"); }
}

tabs.addEventListener("click", e => {
  const b = e.target.closest(".tab");             // chkon tclika 3lih
  if (b) showService(b.dataset.k);
});

// 3) Mn lowl: ila kayn #sol f l lien kan7llo 3la solaire, ila la kan7llo 3la CFO
const fromHash = location.hash.slice(1);
showService(SERVICES[fromHash] ? fromHash : "cfo", false);
