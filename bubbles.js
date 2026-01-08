// bubbles.js — Seifenblasen beim Klick auf "Erfahre mehr" (nur wenn Aero an ist)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("erfahremehrbutton");
  if (!btn) return; // nur Startseite hat den Button

  // Layer einmalig erzeugen
  let layer = document.querySelector(".fa-bubble-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "fa-bubble-layer";
    document.body.appendChild(layer);
  }

  function spawnBubbles() {
    // Nur wenn Aero aktiv ist
    if (!document.body.classList.contains("fa-theme")) return;

    const count = 14; // Anzahl Blasen
    const rect = btn.getBoundingClientRect();

    // Startbereich: rund um den Button (wir machen einen "Burst")
    const startXMin = rect.left - 80;
    const startXMax = rect.right + 80;

    for (let i = 0; i < count; i++) {
      const b = document.createElement("div");
      b.className = "fa-bubble";

      const size = 10 + Math.random() * 22;           // 10–32px
      const x = startXMin + Math.random() * (startXMax - startXMin);
      const dur = 700 + Math.random() * 700;          // 0.7–1.4s
      const rise = 180 + Math.random() * 260;         // 180–440px
      const drift = (-60 + Math.random() * 120) + "px"; // -60..+60

      b.style.setProperty("--size", size + "px");
      b.style.setProperty("--x", x + "px");
      b.style.setProperty("--dur", dur + "ms");
      b.style.setProperty("--rise", rise + "px");
      b.style.setProperty("--drift", drift);

      layer.appendChild(b);

      // Cleanup
      setTimeout(() => b.remove(), dur + 50);
    }
  }

  btn.addEventListener("click", spawnBubbles);
});
