const Up = document.getElementById("Up");
const iconOpen = document.querySelector(".icon-menu");
const menuOpen = document.querySelector(".menu");
let removHidden = document.querySelector("#logo-portfolio");
//
// Up Button
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    Up.style.opacity = "1";
    Up.style.pointerEvents = "auto";
  } else {
    Up.style.opacity = "0";
    Up.style.pointerEvents = "none";
  }
});
Up.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Menu
iconOpen.addEventListener("click", function () {
  iconOpen.classList.toggle("open");
  menuOpen.classList.toggle("open");
  removHidden.classList.toggle("open");
});
