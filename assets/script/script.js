const abrirMenu = document.getElementById("abrirMenu");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

abrirMenu.addEventListener("click", () => {
  menuMobile.classList.add("show");
  overlay.classList.add("open");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("show");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("show");
  overlay.classList.remove("open");
});
