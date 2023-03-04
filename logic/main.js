const rootStyles = document.documentElement.style;

const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll("nav");
const navList = document.querySelectorAll("nav div ul li");
const habilities = document.getElementsByClassName("habilities-title");
const btnSwitch = document.getElementById("switch");
const aboutTitle = document.getElementById("about-description");
const containerOne = document.getElementById("container-1");

const checkbox = document.getElementById("menu-hamburguesa");

const formDesktop = document.getElementById("form-desktop");
const formMobile = document.getElementById("form-mobile");
const textAreaMobile = document.getElementById("text-area-mobile");
const iconLoandingMobile = document.getElementById("icon-loanding-mobile");
const textAreaDesktop = document.getElementById("text-area-desktop");
const iconLoandingDesktop = document.getElementById("icon-loanding-desktop");
const img = document.getElementById("img-icon");

let form = null;
let textArea = null;
let iconLoanding = null;

if (screen.width >= 800) {
  // formulario en escritorio
  form = formDesktop;
  textArea = textAreaDesktop;
  iconLoanding = iconLoandingDesktop;
} else {
  // formulario en celular o tablet
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

const lightMode = () => {
  document.body.classList.toggle("light");
  btnSwitch.classList.toggle("active-dark");
  containerOne.classList.toggle("container-light");
  formDesktop.classList.toggle("contact-form-light");
  formMobile.classList.toggle("contact-form-light");
  aboutTitle.classList.toggle("container-light");
  nav[0].classList.toggle("nav-light");
  img.classList.toggle("img-light");
  // console.log(habilities.length);
  for (let i = 0; i < habilities.length; i++) {
    console.log(habilities[i]);
    habilities[i].classList.toggle("container-light");
  }
};
