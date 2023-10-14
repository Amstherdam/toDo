import {
  deleteProjectBtnDlt,
  mainContentH2,
  projectNameArr,
  projectsContainer,
  createProjectInside,
} from "./constractItem";

export const removeProject = function () {
  deleteProjectBtnDlt.addEventListener("click", () => {
    let bre = mainContentH2.innerHTML.slice(0, -1);
    let indexSpesificItem = projectNameArr.indexOf(bre);

    if (indexSpesificItem > -1) {
      projectNameArr.splice(indexSpesificItem, 1); // remove item in array
    }

    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.lastChild); // remove project section all items with this loop
    }

    createProjectInside();

    console.log(projectNameArr);
    console.log(bre);
  });
};


/* Sorulacak */
