import createItem, { deleteLi, checked } from "./scripts/todo-item";

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
    if (e.keyCode === 13 && input.value != "") {
      ul.insertAdjacentHTML("beforeend", createItem(input.value));
      input.value = "";
    }
  });
}

function init() {
  liListeners();
  deleteListener();
  inputListener();
  hideInputListener();
}

onload = init;
