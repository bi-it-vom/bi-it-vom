function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Sanftes Scrollen
    });
}

// Event Listener für den "Kein Interesse"-Button
document.getElementById("KeinInteresse-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Buttons
    window.location.href = 'keinteresse.html'; // Neue Seite öffnen
});




