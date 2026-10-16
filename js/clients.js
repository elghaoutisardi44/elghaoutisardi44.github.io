/* =====================================================================
   js/clients.js : PAGE clients.html (affichage + modification dyal clients)
   ---------------------------------------------------------------------
   MODE NORMAL (visiteurs): kay3rd lliste CLIENTS men js/clients-data.js.
   MODE MODIFICATION (nta): click 3la "Modifier la liste" f lakhir dyal page,
   kteb l code (ADMIN_CODE t7t, bddlo), w kayban:
     - bouton x 3la kola client (7yd)
     - case "+ Ajouter un client" (click -> formulaire: smiya + logo)
     - bouton "Télécharger clients-data.js" (fichier jdid bach tnchro)
   MOHIM: l code hna ghir bach l visiteurs ma yt9ablouch 3la l bouton. Mashi
   sécurité 7a9i9iya, walakin l visiteur ma ghadi ybddl walo ghir f navigateur dyalo.
   Les changements kay7ebssou f navigateur dyalk (localStorage) hta tdir
   "Télécharger" w t7ett l fichier f site.
   ===================================================================== */

const ADMIN_CODE = "elextrama";        // bddlo b l code dyalk
const KEY = "elextrama_clients_admin"; // smiyt l khzin f navigateur
const MAX_W = 400;                     // l 3ard l a9sa dyal logo b pixel

const grid = $("clientsGrid");
let admin = sessionStorage.getItem("elx_admin") === "1";   // wach mode modification mfoul
let list = CLIENTS.map(c => ({ ...c }));                   // lliste li kan-3rdo

// Ila f mode modification, kan-st3mlo lliste li khbbit f navigateur (ila kayna)
function loadList() {
  list = CLIENTS.map(c => ({ ...c }));
  if (!admin) return;
  try { const l = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(l)) list = l; } catch (e) {}
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
function say(t) { $("msg").textContent = t; }

// 3ard lliste
function render() {
  grid.innerHTML = "";
  list.forEach((c, i) => {
    const slot = document.createElement("div");
    slot.className = "logo-slot";
    if (c.logo) {
      const img = document.createElement("img");
      img.src = c.logo.startsWith("data:") ? c.logo : "images/clients/" + c.logo;
      img.alt = c.nom;
      slot.appendChild(img);
    } else {
      slot.textContent = c.nom;
    }
    if (admin) {                                           // bouton 7yd ghir f mode modification
      const del = document.createElement("button");
      del.className = "del"; del.type = "button"; del.textContent = "×";
      del.setAttribute("aria-label", "Supprimer " + c.nom);
      del.onclick = () => { list.splice(i, 1); save(); render(); say("Client supprimé."); };
      slot.appendChild(del);
    }
    grid.appendChild(slot);
  });
  if (admin) {                                             // case "+ Ajouter un client"
    const add = document.createElement("div");
    add.className = "logo-slot add-slot";
    add.textContent = "+ Ajouter un client";
    add.onclick = () => { $("addForm").hidden = false; $("cName").focus(); };
    grid.appendChild(add);
  }
  $("adminTools").hidden = !admin;
  $("unlock").parentElement.hidden = admin;
}

// Fta7 / sdd mode modification
$("unlock").addEventListener("click", e => {
  e.preventDefault();
  if (prompt("Code de modification :") === ADMIN_CODE) {
    admin = true; sessionStorage.setItem("elx_admin", "1");
    loadList(); render();
  }
});
$("quit").onclick = () => { admin = false; sessionStorage.removeItem("elx_admin"); loadList(); render(); };

// Tswira -> data URL sghira (PNG chaffaf, max 400px)
function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onerror = reject;
    fr.onload = () => {
      if (file.type === "image/svg+xml") return resolve(fr.result);
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const k = Math.min(1, MAX_W / img.width);
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/png"));
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

// Formulaire dyal zyada
$("addForm").addEventListener("submit", async e => {
  e.preventDefault();
  const nom = $("cName").value.trim(), file = $("cLogo").files[0];
  let logo = "";
  if (file) { try { logo = await toDataUrl(file); } catch (err) { say("Impossible de lire cette image."); return; } }
  list.push({ nom, logo });
  save(); render();
  $("addForm").reset(); $("addForm").hidden = true;
  say("Client ajouté : " + nom + ". N'oubliez pas de télécharger le fichier à la fin.");
});
$("cancel").onclick = () => { $("addForm").reset(); $("addForm").hidden = true; };

// Telechargement dyal clients-data.js
$("download").onclick = () => {
  const body = "/* js/clients-data.js : liste des clients (générée depuis clients.html) */\n\nconst CLIENTS = " +
               JSON.stringify(list, null, 2) + ";\n";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([body], { type: "text/javascript" }));
  a.download = "clients-data.js";
  a.click();
  say("Fichier téléchargé. Remplacez js/clients-data.js par celui-ci, puis republiez le site.");
};

// Rje3 l lliste dyal fichier
$("reset").onclick = () => {
  try { localStorage.removeItem(KEY); } catch (e) {}
  loadList(); render(); say("Liste du fichier rechargée.");
};

loadList();
render();
