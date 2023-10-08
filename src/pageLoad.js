import taskComponent from './constractItem';
import modalToggle from './modal';
import createContentforSidebar from './sidebar';
import sidebarToggle from './sidebarToggle';


//! load page function

function load() {
  sidebarToggle();
  modalToggle();
  taskComponent();
  createContentforSidebar();

}

export default load;
