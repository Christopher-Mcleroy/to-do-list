import createItem from "./scripts/createItem";
const input = document.querySelector("input");
const ul = document.querySelector("#list-items");
const plusBtn = document.querySelector(".fa-plus");

function hideInputListener() {
  plusBtn.addEventListener("click", () => input.classList.toggle("hide"));
}

function deleteListener() {
  ul.addEventListener("click", deleteLi);
}

function liListeners() {
  ul.addEventListener("click", checked);
}

function inputListener() {
  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 && input.value != "")
      ul.insertAdjacentHTML("beforeend", createItem(input.value));
  });
}

function checked(e) {
  if (e.target.classList == "far fa-square") {
    e.target.classList = "far fa-check-square";
    e.target.parentElement.classList.toggle("checked");
  } else if (e.target.classList == "far fa-check-square") {
    e.target.parentElement.classList.toggle("checked");
    e.target.classList = "far fa-square";
  }
}

function deleteLi(e) {
  if (e.target.classList == "fas fa-trash") e.target.parentElement.remove();
}

function init() {
  liListeners();
  deleteListener();
  inputListener();
  hideInputListener();
}

onload = init;
