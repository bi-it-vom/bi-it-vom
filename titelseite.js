// titelseite.js
document.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = "Melvin54"; // 🔒 hier dein geheimes Passwort eintragen
  const input = document.getElementById("pw");
  const button = document.getElementById("pw-button");
  const overlay = document.getElementById("passwort-overlay");
  const content = document.getElementById("content");

  function checkPasswort() {
    const eingabe = input.value.trim();
    if (eingabe === PASSWORD) {
      overlay.style.display = "none";
      content.style.display = "block";
    } else {
      input.style.boxShadow = "0 0 10px red";
      input.value = "";
      setTimeout(() => input.style.boxShadow = "0 0 10px rgba(26,115,232,0.6)", 500);
    }
  }

  // Klick auf Button
  button.addEventListener("click", checkPasswort);

  // ENTER-Taste
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPasswort();
  });
});

