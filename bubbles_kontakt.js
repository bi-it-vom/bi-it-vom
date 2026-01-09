// =====================================
// Frutiger Aero – Seifenblasen beim Senden
// Datei: bubbles_kontakt.js
// =====================================

(function () {
  function ensureBubbleLayer() {
    let layer = document.querySelector(".fa-bubble-layer");
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "fa-bubble-layer";
      document.body.appendChild(layer);
    }
    return layer;
  }

  function spawnBubbles(count = 20) {
    // nur im Frutiger-Aero-Modus
    if (!document.body.classList.contains("fa-theme")) return;

    const layer = ensureBubbleLayer();

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement("div");
      bubble.className = "fa-bubble";

      // Zufällige Werte
      const size = Math.floor(16 + Math.random() * 36); // 16–52px
      const x = Math.random() * 100 + "vw";             // ganze Breite
      const duration = (2.5 + Math.random() * 1.8).toFixed(2) + "s";
      const rise = Math.floor(300 + Math.random() * 800) + "px";
      const drift = Math.floor(-80 + Math.random() * 160) + "px";

      bubble.style.setProperty("--size", size + "px");
      bubble.style.setProperty("--x", x);
      bubble.style.setProperty("--dur", duration);
      bubble.style.setProperty("--rise", rise);
      bubble.style.setProperty("--drift", drift);

      layer.appendChild(bubble);

      // nach Animation entfernen
      setTimeout(() => {
        bubble.remove();
      }, parseFloat(duration) * 1000 + 2000);
    }
  }

  // Event binden
  document.addEventListener("DOMContentLoaded", () => {
    const sendButton =
      document.querySelector(".kontakt-form button[type='submit']") ||
      document.querySelector(".kontakt-form button");

    if (!sendButton) return;

    sendButton.addEventListener("click", () => {
      spawnBubbles(240000);

      // zweite Welle für schöneren Effekt
      setTimeout(() => spawnBubbles(100000), 2500);
    });
  });
})();
