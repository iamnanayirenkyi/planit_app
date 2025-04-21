const toToForm = document.querySelector("form");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todoList");
const addButton = document.getElementById("add-button");
let AllPlan = [];

toDoList.style.listStyleType = "none";
toToForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addPlan();
});

// Add event delegation for delete button clicks
toDoList.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    const liToDelete = e.target.closest("li");
    if (liToDelete) {
      liToDelete.remove();
    }
  }
});

function addPlan() {
  const inputText = toDoInput.value.trim();
  if (inputText.length > 0) {
    AllPlan.push(inputText);
    createPlanItem(inputText);
    toDoInput.value = "";
  }
}
function updatePlan(plan, todoIndex) {}

function createPlanItem(plan) {
  const planLi = document.createElement("li");
  planLi.className = "to-list";
  planLi.innerHTML = `
   <input type="checkbox" id="todo-${AllPlan.length}" />
          <label for="todo-${AllPlan.length}" class="custom-checkbox">
            <img
              src="/planit_app/icons/check_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="icon"
            />
          </label>
          <label for="todo-${AllPlan.length}" class="todo-text">${plan}</label>
          <button class="delete-btn">
            <img
              src="/planit_app/icons/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="del"
            />
          </button>
  `;
  toDoList.append(planLi);
}
