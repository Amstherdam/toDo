import { todoArr } from "./constractItem";

let item = document.querySelectorAll(".sidebarItem");
let itemProject = document.querySelectorAll(".projectsTitle");
const theMainContent = document.querySelector("#mainContent");
const mainContentH2 = document.querySelector("#mainContentH2");

const createContentforSidebar = () => {
  const mainContentHeader = document.querySelector("#mainContentHeader");

  item.forEach((itemInside) => {
    itemInside.addEventListener("click", () => {
      mainContentH2.innerHTML = itemInside.textContent + ":";
      let deleteBtns = document.getElementsByClassName("deleteButton");
      mainContentHeader.removeChild(deleteBtns[0]); // Patlayan satir bu sanirsam buraya if yazilacak
    });
  });

  //! leftsidebar  projects' child

  itemProject.forEach((e) => {
    e.addEventListener("click", () => {
      mainContentH2.innerHTML = e.textContent + ":";
      let deleteBtns = document.getElementsByClassName("deleteButton");

      if (deleteBtns.length > 0) {
        mainContentHeader.removeChild(deleteBtns[0]);
        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-regular", "fa-x", "deleteButton");
        mainContentHeader.appendChild(deleteBtn);

        deleteProjectFontion();
      } else {
        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-regular", "fa-x", "deleteButton");
        mainContentHeader.appendChild(deleteBtn);

        deleteProjectFontion();
      }
    });
  });

  //! Projects child inside delete action

  const deleteProjectFontion = function () {
    const deleteButton = document.querySelectorAll(".deleteButton");
    const deleteProjectModal = document.querySelector("#deleteProjectModal");
    const deleteProjectBtnClose = document.querySelector(
      "#deleteProjectBtnClose"
    );
    const deleteProjectBtnDlt = document.querySelector("#deleteProjectBtnDlt");

    const modalClose2 = document.querySelector("#modalClose2");

    deleteButton.forEach((item) => {
      item.addEventListener("click", () => {
        deleteProjectModal.classList.add("modalDataInputOpen");
      });
    });

    deleteProjectBtnClose.addEventListener("click", () => {
      deleteProjectModal.classList.remove("modalDataInputOpen");
    });

    deleteProjectBtnDlt.addEventListener("click", () => {
      deleteProjectModal.classList.remove("modalDataInputOpen");
    });

    modalClose2.addEventListener("click", () => {
      deleteProjectModal.classList.remove("modalDataInputOpen");
    });
  };

  todoChild();
};

///////////////////////////////

const todoChild = function () {

  itemProject.forEach((e) => {
    e.addEventListener("click", () => {
      
      console.log(e)
      console.log("click!");

    });
  });
};

export default createContentforSidebar;

//todo  sidebar icine projelerin itemlari olusturulacak bu da obje bulunduran arrayden cekilecek

/* let equalItem = mainContentH2.innerHTML.slice(0, -1);
      

      todoArr.forEach((itemOfTodoArr) => {
        let createDiv = document.createElement("div");
        createDiv.classList.add("todoItem");
        theMainContent.appendChild(createDiv);
      });
 */
