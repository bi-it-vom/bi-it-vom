document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("datenschutz-overlay");
  const mainContent = document.getElementById("app");
  const acceptBtn = document.getElementById("accept-btn");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      overlay.style.display = "none";
      mainContent.style.display = "block";
    });
  } else {
    console.error("accept-btn nicht gefunden!");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("datenschutz-overlay");
  const acceptBtn = document.getElementById("accept-btn");

  // prüfen, ob schon akzeptiert + ob es noch gültig ist
  const gespeicherteZustimmung = localStorage.getItem("datenschutzAkzeptiert");
  const timestamp = localStorage.getItem("datenschutzZeit");

  if (gespeicherteZustimmung === "true" && timestamp) {
    const jetzt = Date.now();
    const ablauf = 24 * 60 * 60 * 1000; // 24 Stunden in ms
    if (jetzt - parseInt(timestamp, 10) < ablauf) {
      overlay.style.display = "none"; // Zustimmung noch gültig
    } else {
      // abgelaufen -> Speicher zurücksetzen
      localStorage.removeItem("datenschutzAkzeptiert");
      localStorage.removeItem("datenschutzZeit");
    }
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("datenschutzAkzeptiert", "true");
      localStorage.setItem("datenschutzZeit", Date.now().toString()); // Zeit speichern
      overlay.style.display = "none"; // Overlay ausblenden
    });
  }
});
