import { todoArr } from "./constractItem";

// ? the component main function

export const createNewTask = function (e) {
  e.preventDefault()

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
