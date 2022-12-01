const links = document.querySelectorAll(".nav-link");
const contents = document.querySelectorAll(".content");
const hideContents = () =>
  contents.forEach((content) => {
    content.classList.remove("show");
  });
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    hideContents();
    document.querySelector(`#${e.target.dataset.target}`).classList.add("show");
  });
});
