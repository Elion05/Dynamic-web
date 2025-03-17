"use strict"; // Strikte modus inschakelen voor veiligere code

// Alles laden zodra de DOM klaar is
document.addEventListener("DOMContentLoaded", function () {

    // HTML-elementen ophalen
    const postsContainer = document.getElementById("posts-container"); // Container waar de posts komen
    const zoektermInput = document.getElementById("zoekterm"); // Inputveld voor zoektermen
    const sorteerSelect = document.getElementById("sorteer"); // Selectieveld voor sorteren
    const limietSelect = document.getElementById("limiet"); // Selectieveld voor limiet van resultaten
    const toepassenBtn = document.getElementById("toepassen"); // Knop om filter toe te passen
    let posts = []; // Variabele om de opgehaalde posts in op te slaan

    // Functie om posts op te halen van de API
    async function fetchPosts() {
        try {
            // De API aanroepen en wachten op de response
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            // De JSON-data omzetten naar een array en opslaan in de posts-variabele
            posts = await response.json();
            // De posts tonen op het scherm door de renderPosts functie aan te roepen
            renderPosts();
        } catch (error) {
            // Foutmelding tonen als er iets misgaat met het ophalen van de posts
            postsContainer.innerHTML = "<p class='geen-resultaten'>Fout bij het laden van posts.</p>";
        }
    }

    // Functie om de posts te filteren, sorteren en te tonen op de pagina
    function renderPosts() {
        // De zoekterm ophalen en omzetten naar kleine letters voor case-insensitive zoeken
        const zoekterm = zoektermInput.value.toLowerCase();
        // De gekozen sorteervolgorde ophalen
        const sorteerWaarde = sorteerSelect.value;
        // De gekozen limiet omzetten naar een getal
        const limiet = parseInt(limietSelect.value);

        // Filteren: alleen posts tonen waarin de titel de zoekterm bevat
        let gefilterdePosts = posts.filter(post =>
            post.title.toLowerCase().includes(zoekterm)
        );

        // Sorteren op basis van de gekozen sorteermethode
        gefilterdePosts.sort((a, b) => {
            if (sorteerWaarde === "titel-oplopend") return a.title.localeCompare(b.title); // Titel A-Z
            if (sorteerWaarde === "titel-aflopend") return b.title.localeCompare(a.title); // Titel Z-A
            if (sorteerWaarde === "id-oplopend") return a.id - b.id; // ID oplopend (1-100)
            if (sorteerWaarde === "id-aflopend") return b.id - a.id; // ID aflopend (100-1)
        });

        // De lijst beperken tot het gekozen aantal posts
        gefilterdePosts = gefilterdePosts.slice(0, limiet);

        // De postsContainer leegmaken voordat we nieuwe posts toevoegen
        postsContainer.innerHTML = "";

        // Als er geen posts zijn gevonden, tonen we een melding
        if (gefilterdePosts.length === 0) {
            postsContainer.innerHTML = "<p class='geen-resultaten'>Geen posts gevonden.</p>";
            return;
        }

        // Door de gefilterde en gesorteerde posts lopen en ze toevoegen aan de pagina
        gefilterdePosts.forEach(post => {
            const postElement = document.createElement("div"); // Een div-element maken voor de post
            postElement.classList.add("post"); // Klasse "post" toevoegen voor styling
            postElement.innerHTML = `
                <div class="post-titel">${post.title.toUpperCase()}</div> <!-- Titel in hoofdletters -->
                <div class="post-body">${post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}</div> <!-- Alleen eerste 100 tekens tonen -->
                <div class="post-info">
                    <span>ID: ${post.id}</span> <!-- Post ID tonen -->
                    <span>Gebruiker ID: ${post.userId}</span> <!-- Gebruiker ID tonen -->
                </div>
            `;
            postsContainer.appendChild(postElement); // De post toevoegen aan de container
        });
    }

    // Event listener toevoegen aan de "Toepassen" knop om filters toe te passen
    toepassenBtn.addEventListener("click", renderPosts);

    // De posts ophalen bij het laden van de pagina
    fetchPosts();
});
