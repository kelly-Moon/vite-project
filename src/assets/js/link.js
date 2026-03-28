export function link() {
  document.querySelectorAll(".header_nav ul li a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(el.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
