export default function createItem(item) {
  return `
    <div class="todo-item dont-break-out">
      <i class="fas fa-trash"></i>
      <i class="far fa-square"></i>
      <span contenteditable="true">${item}</span>
    </div>
  `;
}

export function checked(e) {
  if (
    e.target.classList == "far fa-square" ||
    e.target.classList == "far fa-check-square"
  ) {
    e.target.classList.toggle("fa-check-square");
    e.target.classList.toggle("fa-square");
    e.target.parentElement.classList.toggle("checked");
  }
}

export function deleteLi(e) {
  if (e.target.classList == "fas fa-trash") e.target.parentElement.remove();
}
