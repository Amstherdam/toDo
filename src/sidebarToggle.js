//! Toggle active 

const sidebarToggle = function () {
  const btn = document.querySelector('#btn');
  const sideBar = document.querySelector('.sidebar');
  let item = document.querySelectorAll('.sidebarItem');
  const sidebarIcon = document.querySelector('#sidebarIconContainer');
  const closeBtn = document.querySelector('#closeBtn');
  const mainContentArea = document.querySelector('#mainContent');
  const addNewProjectBtn =document.querySelector('#addNewProjectBtn')
  const projectsTitle = document.querySelectorAll('.projectsTitle')

  btn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    item.forEach((item2) => {
      item2.classList.toggle('active');
    });
    sidebarIcon.classList.toggle('active');
    closeBtn.classList.toggle('active');
    mainContentArea.classList.toggle('active');
    addNewProjectBtn.classList.toggle('active')
    projectsTitle.forEach((projectsTitleItem) => {
      projectsTitleItem.classList.toggle('active')
    })

  });
};

export default sidebarToggle;
