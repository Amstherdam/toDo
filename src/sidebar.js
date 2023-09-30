const createContentforSidebar = () => {
  const mainContentH2 = document.querySelector("#mainContentH2");
  let item = document.querySelectorAll(".sidebarItem");
  let itemProject = document.querySelectorAll(".projectsTitle");
  const mainContentHeader = document.querySelector("#mainContentHeader");

  item.forEach((itemInside) => {
    itemInside.addEventListener("click", () => {
      mainContentH2.innerHTML = itemInside.textContent + ":";
      /* mainContentHeader.remove(deleteBtn); */
    });
  });

  itemProject.forEach((e) => {
    e.addEventListener("click", () => {
      mainContentH2.innerHTML = e.textContent + ":";
      /* 
      const deleteBtn = document.createElement('i')
      deleteBtn.classList.add('fa-regular', 'fa-x')
      mainContentHeader.appendChild(deleteBtn)
       */
    });
  });
};

export default createContentforSidebar;
