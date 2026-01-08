// frutiger-toggle.js
(function () {
  const KEY = "theme_frutiger_aero";

  function apply(saved) {
    document.body.classList.toggle("fa-theme", saved === "1");
    const btn = document.getElementById("fa-toggle");
    if (btn) btn.textContent = (saved === "1") ? "AERO: ON" : "AERO: OFF";
  }

  function init() {
    // Button falls nicht existiert (optional safety)
    if (!document.getElementById("fa-toggle")) {
      const b = document.createElement("button");
      b.id = "fa-toggle";
      b.type = "button";
      b.textContent = "AERO: OFF";
      document.body.appendChild(b);
    }

    let saved = localStorage.getItem(KEY) || "0";
    apply(saved);

    document.getElementById("fa-toggle").addEventListener("click", () => {
      saved = (localStorage.getItem(KEY) === "1") ? "0" : "1";
      localStorage.setItem(KEY, saved);
      apply(saved);
    });
  }

  // warten bis body da ist
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
