/* =====================================================================
   js/data.js : LES DONNEES DYAL KHADAMAT (source wa7da)
   ---------------------------------------------------------------------
   Had l fichier kay-st3mlouh 2 pages: services.html (l tabs) w contact.html
   (l so2al dyal formulaire). Bach tzid khidma wla tbddl nass: bddl hna ghir.
   Champs dyal kola khidma:
     c     = couleur
     tab   = smiya li katban f tab w f titre
     sub   = sétr sghir t7t smiya
     opt   = smiya DIKHA li kayn f select dyal formulaire (khassha t3awd nafs l nass)
     intro = jomla t3rifiya
     items = "Ce que nous faisons" (liste)
     steps = "Déroulement" (étapes b tartib)
     q     = so2al li kaybdel f formulaire 7sab l khidma
   ===================================================================== */

const SERVICES = {
  cfo:{c:"#f5a623",tab:"Installation CFO / CFA",sub:"Courants forts et faibles",opt:"Installation électrique CFO / CFA",
    intro:"Alimentation, distribution, réseaux data, téléphonie et contrôle : tout ce qui fait fonctionner un local.",
    items:["Tableaux et distribution électrique","Prises, circuits et mise à la terre","Réseaux informatiques et téléphoniques","Mise en conformité"],
    steps:["Visite et relevé du local","Plan et devis","Installation","Tests et remise des plans"],q:"Type de local et surface (m²)"},
  ind:{c:"#3b82c4",tab:"Électricité industrielle",sub:"Usines et ateliers",opt:"Électricité industrielle",
    intro:"Des installations robustes pour alimenter machines, lignes de production et locaux techniques.",
    items:["Armoires et coffrets de commande","Alimentation de machines","Câblage et chemins de câbles","Maintenance et dépannage"],
    steps:["Analyse des besoins","Étude d'exécution","Installation","Mise en service"],q:"Puissance ou type de machines"},
  ecl:{c:"#e8c52e",tab:"Étude d'exécution et d'éclairage",sub:"Plans et calculs",opt:"Étude d'éclairage",
    intro:"Un bon éclairage réduit la consommation et améliore le confort. Nous le calculons avant d'installer.",
    items:["Calcul du niveau d'éclairement","Choix des luminaires LED","Plans d'exécution","Plan d'implantation prêt pour chantier"],
    steps:["Plans du local","Calcul d'éclairage","Choix du matériel","Plans d'exécution"],q:"Type d'espace et surface (m²)"},
  sol:{c:"#4aa564",tab:"Installations solaires",sub:"Réduisez votre facture",opt:"Installation solaire",
    intro:"Panneaux photovoltaïques dimensionnés selon votre consommation réelle.",
    items:["Dimensionnement selon la facture","Pose des panneaux et onduleurs","Raccordement et protections","Suivi de production"],
    steps:["Estimation (calculateur ci-dessous)","Étude sur site","Installation","Mise en service"],q:"Facture mensuelle approximative (DH)"},
  inc:{c:"#e06a3b",tab:"Détection incendie",sub:"Étude et installation",opt:"Détection incendie",
    intro:"Des systèmes de détection adaptés au bâtiment pour alerter tôt et protéger les personnes.",
    items:["Centrale et détecteurs","Sirènes et déclencheurs manuels","Câblage et raccordement","Tests de fonctionnement"],
    steps:["Étude du bâtiment","Plan de détection","Installation","Essais et formation"],q:"Type de bâtiment et nombre d'étages"}
};
