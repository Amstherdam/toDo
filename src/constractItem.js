const modalAdddBtn = document.querySelector("#modalAdddBtn");

let todoArr = [];

const taskComponent = function () {
  modalAdddBtn.addEventListener("click", createNewTask);
  newProjectComponent();
};

const createNewTask = function (event) {
  /* add todo */
  event.preventDefault();

  const title = document.querySelector("#modalNewTitle");
  const description = document.querySelector("#modalNewDescription");
  const dueDate = document.querySelector("#modalNewDate");
  const priority = document.querySelector("#modalNewPriority");
  const project = document.querySelector("#modalNewProject");

  let object = {
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    priority: priority.value,
    project: project.value,
  };

  todoArr.push(object);
  console.log(todoArr);
};

let projectNameArr = [];

const newProjectComponent = () => {
  /* add project  */
  const addProjectBtn = document.querySelector("#newProjectAddBtn");
  const projectsContainer = document.querySelector("#projectsContainer");
  const newTitle = document.querySelector("#getProjectName");
  const btn = document.querySelector("#btn");
  const modalNewProject = document.querySelector("#modalNewProject");

  addProjectBtn.addEventListener("click", () => {
    const newProject = document.createElement("li");

    let newTitleList = newTitle.value.charAt(0).toUpperCase() + newTitle.value.slice(1);

    projectNameArr.push(newTitleList);

    projectNameArr.forEach((projectNameArrItem) => {
      newProject.classList.add("projectsTitle");
      newProject.innerHTML = newTitleList;
      projectsContainer.appendChild(newProject);

      btn.addEventListener("click", () => {
        newProject.classList.toggle("active");
      });

      const newProjectInForm = document.createElement("option");
      newProjectInForm.innerHTML = newTitleList;
      modalNewProject.appendChild(newProjectInForm);
    });

    console.log(projectNameArr);
  });
};

export default taskComponent;
