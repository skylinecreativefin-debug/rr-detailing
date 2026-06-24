const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click", () => {

nav.classList.toggle("active");

});

}

const hiddenElements = document.querySelectorAll(
".card, .pricing-card, .contact-box, .about-box"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});
