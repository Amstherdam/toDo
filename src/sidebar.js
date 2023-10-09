const createContentforSidebar = () => {
  const mainContentH2 = document.querySelector("#mainContentH2");
  let item = document.querySelectorAll(".sidebarItem");
  let itemProject = document.querySelectorAll(".projectsTitle");
  const mainContentHeader = document.querySelector("#mainContentHeader");

  item.forEach((itemInside) => {
    itemInside.addEventListener("click", () => {
      mainContentH2.innerHTML = itemInside.textContent + ":";
      let deleteBtns = document.getElementsByClassName("deleteButton");
      mainContentHeader.removeChild(deleteBtns[0]);
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
    const modalClose2 = document.querySelector("#modalClose2");

    deleteButton.forEach((item) => {
      item.addEventListener("click", () => {
        deleteProjectModal.classList.add("modalDataInputOpen");
      });
    });

    deleteProjectBtnClose.addEventListener("click", () => {
      deleteProjectModal.classList.remove("modalDataInputOpen");
    });

    modalClose2.addEventListener("click", () => {
      deleteProjectModal.classList.remove("modalDataInputOpen");
    });
  };
};

export default createContentforSidebar;
