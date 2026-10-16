/* =====================================================================
   js/contact.js : PAGE contact.html (formulaire devis -> WhatsApp)
   ---------------------------------------------------------------------
   1) Ila jiti men page okhra b lien b7al contact.html?service=sol&extra=...
      kan3mmro formulaire taqa'iyan (service + l so2al).
   2) Mnin tbdl "Service" f select, so2al dyal champ extra kaybdel (SERVICES[k].q)
   3) Mnin tclikki "Envoyer", kan-sawbo message w kan7llo WhatsApp
      (bla serveur: wa.me kay7ll WhatsApp m3a message jahez)
   ===================================================================== */

function setQuote(k, extraValue) {
  $("service").value = SERVICES[k].opt;          // kan-khtaro service f select
  $("extraL").textContent = SERVICES[k].q;       // so2al mnasb
  if (extraValue !== undefined) $("extra").value = extraValue;
}

// 1) Qraya dyal paramètres dyal URL
const params = new URLSearchParams(location.search);
const k0 = SERVICES[params.get("service")] ? params.get("service") : "cfo";
setQuote(k0, params.get("extra") || "");

// 2) Tbdil service
$("service").addEventListener("change", () => {
  const k = Object.keys(SERVICES).find(x => SERVICES[x].opt === $("service").value);
  setQuote(k, "");
});

// 3) Envoi
$("quote").addEventListener("submit", e => {
  e.preventDefault();                            // man5ellach page t3awd t7ml
  const text = `Bonjour ELEXTRAMA, je suis ${$("name").value}.\n` +
               `Service : ${$("service").value}\n` +
               `${$("extraL").textContent} : ${$("extra").value || "-"}\n` +
               `${$("msg").value}`;
  // encodeURIComponent: kay7wl l 7oroof l khassa (é, retour à la ligne...) l format li URL kayfhmo
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
});
