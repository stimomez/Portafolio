const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav div ul li");
const checkbox = document.getElementById("menu-hamburguesa");
//const style = document.documentElement.style;

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
