/* =====================================================================
   js/solaire.js : PAGE solaire.html (calculateur solaire)
   ---------------------------------------------------------------------
   Client kaykhtar facture mensuelle b slider, w kan7sbo estimation.
   HYPOTHESES (tqribia, bddlhom 7sab l wa9i3 dyal charika):
     PRICE_KWH          = taman dyal 1 kWh f DH
     KWH_PER_KWP_MONTH  = ch7al kay-intej 1 kWc f chhar f Casablanca
     COVERAGE           = nsba men l facture li ghadi n9ddo b solaire (70%)
     PANEL_W            = quwwat panneau b Watt
   Formule:
     kWh/chhar   = facture / taman kWh
     kWc lazma   = kWh/chhar * COVERAGE / KWH_PER_KWP_MONTH
     panneaux    = kWc * 1000 / PANEL_W  (kan-rb7ouh l foq)
     économie    = facture * COVERAGE
   ===================================================================== */

const PRICE_KWH = 1.2;
const KWH_PER_KWP_MONTH = 125;
const COVERAGE = 0.7;
const PANEL_W = 550;

function calc() {
  const bill = Number($("bill").value);                       // l9ima dyal slider
  $("billOut").textContent = bill.toLocaleString("fr-FR") + " DH";

  const kwhMonth = bill / PRICE_KWH;
  const kwp = (kwhMonth * COVERAGE) / KWH_PER_KWP_MONTH;
  const panels = Math.ceil(kwp * 1000 / PANEL_W);
  const month = Math.round(bill * COVERAGE);

  $("rKw").textContent = kwp.toFixed(1) + " kWc";
  $("rPan").textContent = panels;
  $("rMonth").textContent = month.toLocaleString("fr-FR") + " DH";
  $("rYear").textContent = (month * 12).toLocaleString("fr-FR") + " DH";

  // Bouton "étude précise": kaysift l estimation l page contact f l URL
  const extra = bill + " DH (estimation : " + kwp.toFixed(1) + " kWc)";
  $("calcCta").href = "contact.html?service=sol&extra=" + encodeURIComponent(extra);
}

$("bill").addEventListener("input", calc);   // kol mra slider kaytbdl => n3awdo n7sbo
calc();                                      // w mra mnin kat7ml page
