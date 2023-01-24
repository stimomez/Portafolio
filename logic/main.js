const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav div ul li");
const nav = document.querySelectorAll("nav");
const checkbox = document.getElementById("menu-hamburguesa");
const rootStyles = document.documentElement.style;
const formDesktop = document.getElementById("form-desktop");
const formMobile = document.getElementById("form-mobile");
const textAreaMobile = document.getElementById("text-area-mobile");
const iconLoandingMobile = document.getElementById("icon-loanding-mobile");
const textAreaDesktop = document.getElementById("text-area-desktop");
const iconLoandingDesktop = document.getElementById("icon-loanding-desktop");
const img = document.getElementById("img-icon");
const habilities = document.getElementsByClassName("habilities-title");

const  btnSwitch = document.getElementById("switch");
const containerOne = document.getElementById("container-1");
const aboutTitle = document.getElementById("about-description");



 
 btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active-dark");
  containerOne.classList.toggle("contenedor1-dark");
  formDesktop.classList.toggle("contact-form-dark");
  formMobile.classList.toggle("contact-form-dark");
  aboutTitle.classList.toggle("contenedor1-dark");
  nav[0].classList.toggle("nav-dark");
  img.classList.toggle("img-dark");
  for (let i = 0; i < habilities.length; i++) {
   habilities[i].classList.toggle('habilities-title-dark')
  
}


});

let form = null;
let textArea = null;
let iconLoanding = null;

if (screen.width >= 800) {
  form = formDesktop;
  textArea = textAreaDesktop;
  iconLoanding = iconLoandingDesktop;
} else {
  form = formMobile;
  textArea = textAreaMobile;
  iconLoanding = iconLoandingMobile;
}

form = addEventListener("submit", () => isLoanding());

const isLoanding = () => {
  textArea.style.opacity = 0;
  iconLoanding.style.opacity = 1;
};

navList.forEach((li) => {
  li.addEventListener("click", () => {
    if (screen.width < 800) {
      checkbox.checked = !checkbox.checked;
    }
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeigth = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeigth / 3) {
      section.classList.add("transitions");
      current = section.getAttribute("id");
    }
  });
  navList.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
