export default function createItem(item) {
  return `
    <div class="todo-item dont-break-out">
      <i class="fas fa-trash"></i>
      <i class="far fa-square"></i>
      <span contenteditable="true">${item}</span>
    </div>
  `;
}
