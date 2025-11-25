 console.log("Le script est chargé !")
// 1. CIBLER
const titre = document.querySelector('#titre-principal');

// On vérifie s'il existe (pour ne pas créer d'erreur sur les autres pages)
if (titre) {chevrolet 
  // 2. ÉCOUTER
  titre.addEventListener('click', () => {
    // 3. MANIPULER
    console.log("J'ai cliqué sur Chevrolet  !");
    titre.textContent = "Chevrolet  cliqué !";
  });
}
// --- LOGIQUE DU DARK MODE ---
// 1. CIBLER
const themeButton = document.querySelector('#theme-toggle');

// On vérifie si le bouton existe sur la page actuelle
if (themeButton) {
  // 2. ÉCOUTER
  themeButton.addEventListener('click', () => {
    // 3. MANIPULER
    // On ajoute/retire la classe 'dark-mode' sur le body
    document.body.classList.toggle('dark-mode');
  });
}