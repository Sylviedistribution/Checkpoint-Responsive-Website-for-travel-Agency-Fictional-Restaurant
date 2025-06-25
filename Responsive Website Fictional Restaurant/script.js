const header = document.getElementById("en-tete");
const fullHeader = document.querySelector("header");

function handleScroll() {
  if (window.scrollY > window.innerHeight - 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

function handleResize() {
  if (window.innerWidth <= 768) {
    fullHeader.classList.add("scrolled", "position-fixed");
    fullHeader.classList.remove("position-absolute");
  } else {
    fullHeader.classList.remove("scrolled");
    fullHeader.classList.remove("position-fixed");
    fullHeader.classList.add("position-absolute");
  }
}

// Événements
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize); // pour ajuster au chargement
