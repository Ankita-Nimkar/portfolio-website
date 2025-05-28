const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const upLine = document.querySelector(".up-line");
const midLine = document.querySelector(".mid-line");
const botLine = document.querySelector(".bot-line");
var links = document.getElementsByClassName("exit");

// overlay////
hamburgerMenu.addEventListener("click", displayOverlay);
function displayOverlay() {
  overlay.classList.toggle("hidden");

  upLine.classList.toggle("rotateU");
  midLine.classList.toggle("rotateM");
  botLine.classList.toggle("rotateB");
}

// overlay links click
for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    console.log("link is clicked");
    overlay.classList.toggle("hidden");

    upLine.classList.toggle("rotateU");
    midLine.classList.toggle("rotateM");
    botLine.classList.toggle("rotateB");
  };
}

///slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
// scroll to top
let mybutton = document.getElementById("up");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ///scroll

// const about = document.querySelector(".about");
// about.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll
//   overlay.classList.add("hidden");
//   upLine.classList.remove("rotateU");
//   midLine.classList.remove("rotateM");
//   botLine.classList.remove("rotateB");
//   window.scrollTo({ top: 600, behavior: "smooth" });
// });
// const aboutDesk = document.querySelector(".aboutDesk");
// aboutDesk.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll

//   window.scrollTo({ top: 550, behavior: "smooth" });
// });

// const projects = document.querySelector(".projects");
// projects.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll
//   overlay.classList.add("hidden");
//   upLine.classList.remove("rotateU");
//   midLine.classList.remove("rotateM");
//   botLine.classList.remove("rotateB");
//   window.scrollTo({ top: 1280, behavior: "smooth" });
// });

// const projectsDesk = document.querySelector(".projectsDesk");
// projectsDesk.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll

//   window.scrollTo({ top: 1180, behavior: "smooth" });
// });

// const skill = document.querySelector(".skill");
// skill.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll
//   overlay.classList.add("hidden");
//   upLine.classList.remove("rotateU");
//   midLine.classList.remove("rotateM");
//   botLine.classList.remove("rotateB");
//   window.scrollTo({ top: 3900, behavior: "smooth" });
// });

// const skillDesk = document.querySelector(".skillDesk");
// skillDesk.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll
//   console.log("hi");
//   window.scrollTo({ top: 3179, behavior: "smooth" });
// });

// const contactNav = document.querySelector(".contactNav");
// contactNav.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll
//   overlay.classList.add("hidden");
//   upLine.classList.remove("rotateU");
//   midLine.classList.remove("rotateM");
//   botLine.classList.remove("rotateB");
//   window.scrollTo({ top: 4400, behavior: "smooth" });
// });

// const contactDesk = document.querySelector(".contactDesk");
// contactDesk.addEventListener("click", (e) => {
//   e.preventDefault();
//   // smooth scroll
//   console.log("hi");
//   window.scrollTo({ top: 3705, behavior: "smooth" });
// });
