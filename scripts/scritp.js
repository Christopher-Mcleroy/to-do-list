const listItem = document.querySelectorAll(".todo-item");
const input = document.querySelector("input");
const ul = document.querySelector("#list-items");
const plusBtn = document.querySelector(".fa-plus");
const trashBtn = document.querySelector(".fa-trash");
onload = init;
//******************************************************************************** */
//*****************************Loads listeners*********************************** */
//******************************************************************************** */
function init() {
  liListeners();
  deleteListener();
  inputListener();
  hideInputListener();
}
//******************************************************************************** */
//***************************Add button listener******************************* */
//******************************************************************************** */
function hideInputListener() {
  plusBtn.addEventListener("click", function () {
    input.classList.toggle("hide");
  });
}

//******************************************************************************** */
//***************************Delete button listener******************************* */
//******************************************************************************** */
function deleteListener() {
  ul.addEventListener("click", function (e) {
    deleteLi(e);
  });
}
//******************************************************************************** */
//***************************Check LI listener**************************************** */
//******************************************************************************** */
function liListeners() {
  ul.addEventListener("click", function (e) {
    checked(e);
  });
}
//******************************************************************************** */
//*****************************Text Input Listener******************************** */
//******************************************************************************** */
function inputListener() {
  input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      if (input.value != "") {
        addItem();
      }
    }
  });
}
//******************************************************************************** */
//*************Toggles checked class when Li is clicked*************************** */
//******************************************************************************** */
function checked(e) {
  if (e.target.classList == "far fa-square") {
    // change icon
    e.target.classList = "far fa-check-square";
    // strike through text
    e.target.parentElement.classList.toggle("checked");
  } else if (e.target.classList == "far fa-check-square") {
    e.target.parentElement.classList.toggle("checked");
    e.target.classList = "far fa-square";
  }
}
//******************************************************************************** */
//***********************Deletes Li when delete btn is pressed********************* */
//******************************************************************************** */
function deleteLi(e) {
  if (e.target.classList == "fas fa-trash") {
    e.target.parentElement.remove();
  }
}
//******************************************************************************** */
//**********************Adds li when input is submitted**************************** */
//******************************************************************************** */
 function addItem() {
  // create li
  let div = document.createElement("div");
  // add class to div
  div.classList = "todo-item";
  //make trash icon
  let trash = document.createElement("i");
  //add class to trash icon
  trash.classList = "fas fa-trash";
  //append trash icon
  div.appendChild(trash);
  // create check icon
  let check = document.createElement("i");
  // add class to icon
  check.classList = "far fa-square";
  //append icon to li
  div.appendChild(check);
  // create text node
  let itemText = document.createTextNode(` ${input.value}`);
  // create span
  let span = document.createElement("span");
  // add attr
  span.setAttribute("contenteditable", "true");
  // append text node to span
  span.appendChild(itemText);
  //append span to li
  div.appendChild(span);
  // append to ul
  ul.appendChild(div);
  // clear input
  input.value = "";
}
