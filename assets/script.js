const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialisation de l'index de l'image
let currentIndex = 0;

// Références des éléments à l'aide de document.getElementById
//avec const pour montrer que cette variable ne sera pas réaffectée, réduit les risques de bugs
const bannerImage = document.getElementById('banner-img');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const bannerText = document.querySelector('#banner > p');
console.log(bannerText); // Devrait afficher le paragraphe dans la console



// Vérification si bannerImage existe
if (!bannerImage) {
	console.error("L'élément #banner-img n'a pas été trouvé dans le DOM.");
} else {
	console.log("L'élément #banner-img a été détecté.");
}

// Fonction pour afficher l'image précédente
function showPreviousImage() {
    console.log('Flèche gauche cliquée!');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	updateSlider(); 
	// Changement de l'image
	updateActiveDot(); // Mise à jour des dots
}


// Fonction pour afficher l'image suivante
function showNextImage() {
    console.log('Flèche droite cliquée!');
    currentIndex = (currentIndex + 1) % slides.length;
    bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	updateSlider();
	// Changement de l'image
	updateActiveDot(); // Mise à jour des dots
}



console.log("script.js chargé avec succès.");

// Fonction pour gérer les clics avec différenciation des boutons
function handleMouseClick(event, direction) {
	console.log(`event.button = ${event.button}`); // Affiche la valeur exacte de event.button lorsqu'un clic est effectué
    if (event.button === 0) { // Bouton gauche
        console.log(`Bouton gauche cliqué sur la flèche ${direction}`);
        if (direction === "gauche") {
            showPreviousImage();
        } else if (direction === "droite") {
            showNextImage();
        }
    } else if (event.button === 2) { // Bouton droit
        console.log(`Bouton droit cliqué sur la flèche ${direction}`);
        // Ajoutez une action pour le clic droit si nécessaire
    } else {
        console.log(`Autre bouton cliqué (${event.button}) sur la flèche ${direction}`);
    }
}

// Ajout des event listeners pour détecter le bouton cliqué
if (leftArrow) {
    leftArrow.addEventListener("mousedown", (event) => handleMouseClick(event, "gauche"));
}

if (rightArrow) {
    rightArrow.addEventListener("mousedown", (event) => handleMouseClick(event, "droite"));
}

// Désactiver le menu contextuel pour les flèches
if (leftArrow) {
    leftArrow.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Empêche le menu contextuel
        console.log("Menu contextuel désactivé pour la flèche gauche.");
    });
}

if (rightArrow) {
    rightArrow.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Empêche le menu contextuel
        console.log("Menu contextuel désactivé pour la flèche droite.");
    });
}


// Etape 3: Ajout des dots
// Référence au conteneur des dots
const dotsContainer = document.querySelector('.dots');

// Fonction pour créer les dots
function createDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('span'); // Crée un élément <span> pour chaque dot
        dot.classList.add('dot'); // Ajoute la classe CSS pour styliser les dots

        // Ajoute la classe .dot_selected au premier dot par défaut
        if (index === 0) {
            dot.classList.add('dot_selected');
        }

        // Ajoute un attribut data-index pour identifier le dot
        dot.setAttribute('data-index', index);

        // Ajoute le dot au conteneur
        dotsContainer.appendChild(dot);

        // Ajoute un event listener pour rendre les dots interactifs
        dot.addEventListener('click', () => {
            currentIndex = index; // Met à jour l'index actuel
            updateSlider(); // Met à jour le slider (image + dots + texte)
        });
    });
}

// Appeler la fonction pour générer les dots
createDots();
// Changement du dot actif
function updateActiveDot() {
    const dots = document.querySelectorAll('.dot'); // Sélectionne tous les dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected'); // Ajoute la classe au dot actif
        } else {
            dot.classList.remove('dot_selected'); // Supprime la classe des autres dots
        }
    });
}

// Mise à jour du texte lors des changements d'image
function updateSlider() {
	console.log(bannerText); // Devrait afficher l'élément <p>
    console.log(slides[currentIndex].tagLine); // Devrait afficher la tagline associée à l'index actuel
    // Mise à jour de l'image
    bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    
    // Mise à jour du texte
    bannerText.innerHTML = slides[currentIndex].tagLine; // Change le texte
    
    // Mise à jour des dots
    updateActiveDot();
}











