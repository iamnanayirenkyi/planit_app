const toToForm = document.querySelector("form");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todoList");

let AllPlan = [];

toDoList.style.listStyleType = "none";
toToForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addPlan();
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
              src="/icons/check_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="icon"
            />
          </label>
          <label for="todo-${AllPlan.length}" class="todo-text">${plan}</label>
          <button class="delete-btn">
            <img
              src="/icons/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="del"
            />
          </button>
  `;
  toDoList.append(planLi);
}
