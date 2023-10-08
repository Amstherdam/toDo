//! Modals Open and Close

const modalContainer = document.querySelector("#modalDataInput");
const addNewFormBtn = document.querySelector("#addNewFormBtn");
const modalCloseBtn = document.querySelector("#modalClose");
const addProjectBtn = document.querySelector("#addNewProjectBtn");
const newProjectModal = document.querySelector("#newProjectModal");
const newProjectCloseBtn = document.querySelector("#newProjectCloseBtn");
const modalCloseBtn2 = document.querySelector("#modalCloseBtn");




const modalToggle = function () {
  addNewFormBtn.addEventListener("click", () => {
    modalContainer.classList.add("modalDataInputOpen");
  });

  modalCloseBtn.addEventListener("click", () => {
    modalContainer.classList.remove("modalDataInputOpen");
  });

  modalCloseBtn2.addEventListener("click", () => {
    modalContainer.classList.remove("modalDataInputOpen");
  });

  addProjectBtn.addEventListener("click", () => {
    newProjectModal.classList.add("modalDataInputOpen");
  });

  newProjectCloseBtn.addEventListener("click", () => {
    newProjectModal.classList.remove("modalDataInputOpen");
  });

  

  
};

export default modalToggle;
