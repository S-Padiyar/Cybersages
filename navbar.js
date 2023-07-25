const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

Array.from(navLinks).forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

function toggle() {
  const Shadow = document.querySelectorAll(".navbar");
  
  if (window.scrollY === 0) {
    for (let i = 0; i < Shadow.length; i++) {
      Shadow[i].style.boxShadow = "none";
    }
  } else {
    for (let i = 0; i < Shadow.length; i++) {
      Shadow[i].style.boxShadow = "0px 2px 5px rgba(55, 124, 145, 0.5)";
    }
  }
}

window.onscroll = toggle;

