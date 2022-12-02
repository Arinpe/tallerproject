const links = document.querySelectorAll(".nav-link");
const contents = document.querySelectorAll(".content");
const hideContents = () =>
  contents.forEach((content) => {
    console.log(content);
    content.classList.remove("show-content");
  });
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    hideContents();
    document.querySelector(`#${link.dataset.target}`).classList.add("show-content");
  });
});
