export function menu() {
  // console.log(menu);
  const headerToggle = document.querySelector("#headerToggle");
  const heafeNav = document.querySelector(".header_nav");

  if (headerToggle) {
    headerToggle.addEventListener("click", () => {
      heafeNav.classList.toggle("show");

      headerToggle.getAttribute("aria-expanded") === "true"
        ? headerToggle.setAttribute("aria-expanded", "false")
        : headerToggle.setAttribute("aria-expanded", "true");
    });
  }

  // if (headerToggle.getAttribute("aria-expanded") === "true") {
  //   headerToggle.setAttribute("aria-expanded", "false");
  // } else {
  //   headerToggle.setAttribute("aria-expanded", "true");
  // }
}
