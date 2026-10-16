/* =====================================================================
   js/main.js : L CODE LI KHDDAM F KOLA PAGE
   ---------------------------------------------------------------------
   Kola page kat7mmlo mn qbl l fichiers khrin, 7it fih l outils l mochtaraka:
     - PHONE   : raqm WhatsApp (bddlo hna mra wa7da w ytbddl f site kamel)
     - $       : raccourci bach nkhtaro element b l id dyalo
     - reduce  : wach l utilisateur ma bghach animations
     - menu burger (tilifon), lien actif f menu, w sana f footer
   ===================================================================== */

const PHONE = "212669540721";                 // raqm bla "+" w bla "0" f lowl
const $ = id => document.getElementById(id);  // $("nav") = document.getElementById("nav")
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- 1. Menu burger (kayban ghir f tilifon) --- */
const nav = $("nav"), burger = $("burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");       // kayzid wla kay7yd classe "open" (CSS howa li kay-ban/kay-khfi)
  burger.setAttribute("aria-expanded", open);      // l accessibilité (lecteurs d'écran)
});

/* --- 2. Lien actif: kanchoufo smiyt fichier dyal page w nlowno lien dyalha --- */
const here = location.pathname.split("/").pop() || "index.html";  // ex: "services.html"
nav.querySelectorAll("a").forEach(a => {
  if (a.getAttribute("href") === here) a.classList.add("active");
});

/* --- 3. Sana f footer --- */
$("year").textContent = new Date().getFullYear();
