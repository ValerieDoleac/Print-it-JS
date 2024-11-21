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

// Tableau des images du slideshow
const images = [
    './assets/images/slideshow/slide1.jpg',
    './assets/images/slideshow/slide2.jpg',
    './assets/images/slideshow/slide3.jpg',
	'./assets/images/slideshow/slide4.png'
];

// Initialisation de l'index de l'image
let currentIndex = 0;

// Références des éléments, avec const pour montrer que cette variable ne sera pas réaffectée, réduit les risques de bugs
const bannerImage = document.getElementById('banner-image');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Fonction pour afficher l'image précédente
function showPreviousImage() {
    // Console.log pour montrer que la fonction est appelée
    console.log('Flèche gauche cliquée!');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    bannerImage.src = images[currentIndex];
}

// Fonction pour afficher l'image suivante
function showNextImage() {
    // Console.log pour montrer que la fonction est appelée
    console.log('Flèche droite cliquée!');
    currentIndex = (currentIndex + 1) % images.length;
    bannerImage.src = images[currentIndex];
}

// Ajout des event listeners
leftArrow.addEventListener('click', showPreviousImage);
rightArrow.addEventListener('click', showNextImage);


if (leftArrow) {
console.log("Flèche gauche détectée !");
leftArrow.addEventListener("click", () => {
    console.log("Clic sur la flèche gauche !");
});
} else {
console.error("Flèche gauche non trouvée dans le DOM.");
}

if (rightArrow) {
console.log("Flèche droite détectée !");
rightArrow.addEventListener("click", () => {
    console.log("Clic sur la flèche droite !");
});
} else {
console.error("Flèche droite non trouvée dans le DOM.");
}

console.log("script.js chargé avec succès.");
