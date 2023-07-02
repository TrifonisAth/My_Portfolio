import "./style.css";
import "./index.html";
import ScrollReveal from "scrollreveal";

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Close menu, mobile.
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((el) => el.addEventListener("click", linkAction));

// Scroll sections active link.
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      // Match href with .nav-menu ancestor, containing sectionId.
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
// Using scrollReveal library.
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-title", {});
sr.reveal(".home-scroll", { delay: 100 });
sr.reveal(".home-img", { origin: "right", delay: 300 });

sr.reveal(".about-img", { origin: "left", delay: 100 });
sr.reveal(".about-subtitle", { delay: 200 });
sr.reveal(".about-prof", { delay: 200 });
sr.reveal(".about-text", { delay: 150 });
sr.reveal(".about-social-icon", { delay: 300, interval: 250 });

sr.reveal(".project-img", { delay: 100, interval: 100 });

sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-name", { delay: 50, distance: "20px", interval: 20 });
sr.reveal(".skills-img", { origin: "left", delay: 200 });

sr.reveal(".contact-subtitle", {});
sr.reveal(".contact-text", { interval: 100 });
sr.reveal(".contact-input", { delay: 200 });
sr.reveal(".contact-button", { interval: 200 });
