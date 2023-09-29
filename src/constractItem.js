const modalAdddBtn = document.querySelector("#modalAdddBtn");

let todoArr = [];
const taskComponent = function () {
  modalAdddBtn.addEventListener("click", createNewTask);
  newProjectComponent()
};

const createNewTask = function (event) {  /* add todo */
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


const  newProjectComponent =  () => {  /* add project  */
  const addProjectBtn = document.querySelector('#newProjectAddBtn')
  const projectsContainer = document.querySelector('#projectsContainer')
  const newTitle = document.querySelector('#getProjectName')

  addProjectBtn.addEventListener('click', () => { 
    const newProject = document.createElement('li')
    newProject.classList.add('projectsTitle')
    newProject.classList.add('projectItems')
    newProject.innerHTML = newTitle.value
    projectsContainer.appendChild(newProject)
  }) 
}
 
export default taskComponent;



