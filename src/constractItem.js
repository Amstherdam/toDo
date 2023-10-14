import createContentforSidebar from "./sidebar";
import { createNewTask } from "./projectDetails";

export let todoArr = []; //! it is the main array. The array have inside todo objects

// ? the component main function

const modalAdddBtn = document.querySelector("#modalAdddBtn");

const taskComponent = function () {
  modalAdddBtn.addEventListener("click", createNewTask);
  createProjectInside();
  removeProject();
};

let projectNameArr = [];

//! remove Project

const deleteProjectBtnDlt = document.querySelector("#deleteProjectBtnDlt");
const mainContentH2 = document.querySelector("#mainContentH2");
let projectsContainer = document.querySelector("#projectsContainer");
const sidebarInbox = document.querySelector("#sidebarInbox");
const modalNewProject = document.querySelector("#modalNewProject");

const removeProject = function () {
  deleteProjectBtnDlt.addEventListener("click", () => {
    let bre = mainContentH2.innerHTML.slice(0, -1);
    let indexSpesificItem = projectNameArr.indexOf(bre);

    if (indexSpesificItem > -1) {
      projectNameArr.splice(indexSpesificItem, 1); // remove item in array
    }

    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.lastChild); // remove project section all items with this loop
    }

    while (modalNewProject.firstChild) {
      modalNewProject.removeChild(modalNewProject.lastChild);
    }

    console.log(todoArr);

    const btn = document.querySelector("#btn");

    projectNameArr.forEach((projectNameArrItem) => {
      const newProject = document.createElement("li");
      newProject.classList.add("projectsTitle");
      newProject.innerHTML = projectNameArrItem;
      projectsContainer.appendChild(newProject);

      btn.addEventListener("click", () => {
        newProject.classList.toggle("active");
      });

      const newProjectInForm = document.createElement("option");
      newProjectInForm.innerHTML = projectNameArrItem;
      modalNewProject.appendChild(newProjectInForm);
    });

    createContentforSidebar();

    if (projectNameArr[0] == undefined) {
      mainContentH2.innerHTML = sidebarInbox.innerHTML + ":";
    } else {
      mainContentH2.innerHTML = projectNameArr[0] + ":";
    }

    /* console.log(sidebarInbox.innerHTML);
    console.log(projectNameArr[0] == undefined);
    console.log(mainContentH2.innerHTML); */
  });
};

//  ! create project items

const createProjectInside = function () {
  const addProjectBtn = document.querySelector("#newProjectAddBtn");
  const projectsContainer = document.querySelector("#projectsContainer");
  const newTitle = document.querySelector("#getProjectName");
  const btn = document.querySelector("#btn");

  addProjectBtn.addEventListener("click", () => {
    const newProject = document.createElement("li");

    let newTitleList =
      newTitle.value.charAt(0).toUpperCase() + newTitle.value.slice(1);

    projectNameArr.push(newTitleList);

    projectNameArr.forEach((projectNameArrItem) => {
      newProject.classList.add("projectsTitle");
      newProject.innerHTML = newTitleList;
      projectsContainer.appendChild(newProject);

      btn.addEventListener("click", () => {
        newProject.classList.toggle("active");
      });
    });

    const newProjectInForm = document.createElement("option");
    newProjectInForm.innerHTML = newTitleList;
    modalNewProject.appendChild(newProjectInForm);

    createContentforSidebar();

    /* buraya baglancak */
  });
};

export default taskComponent;
