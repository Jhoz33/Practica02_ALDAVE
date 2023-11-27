const $header = document.querySelector("#landing-header")
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); // Verifica si la sección está intersectando
    if (entry.isIntersecting) {
      const color = entry.target.getAttribute("data-header-color");
      $header.style.color = color;
    }
  });
}, observerOptions);

const $sections = document.querySelectorAll(".landing-section");
$sections.forEach((section) => {
  console.log(section); // Verifica las secciones seleccionadas
  console.log(section.getAttribute("data-header-color")); // Verifica el valor de data-header-color
  observer.observe(section);
});
