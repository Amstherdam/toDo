import taskComponent from './constractItem';
import modalToggle from './modal';
import createContentforSidebar from './sidebar';
import sidebarToggle from './sidebarToggle';

function load() {
  sidebarToggle();
  modalToggle();
  createContentforSidebar();
  taskComponent();
}

export default load;
