function loadHTML(selector, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur : Impossible de charger ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Charger le header et le footer
loadHTML("#header", "partials/header.html");
loadHTML("#footer", "partials/footer.html");