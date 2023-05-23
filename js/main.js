import NotesAPI from './NotesAPI.js'

window.addEventListener("load", main);

function main() {

  const themeBtn = document.getElementById("theme-btn");
  const page = document.getElementById("page");
  const sidebar = document.getElementById("sidebar-wrapper");
  const menuBtn = document.getElementById("menu-btn");
  const subMenuBtn = document.getElementById("main-menu-additional-btn");
  const subMenuBtnIcon = document.getElementById("main-menu-additional-btn-icon");
  const subMenu = document.getElementById("main-menu-additional");


  themeBtn.addEventListener("click", ()=>{
    page.classList.toggle('page_dark');
  });

  menuBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle('sidebar-wrapper_hidden');
    menuBtn.classList.toggle('button_active');
  });

  subMenuBtn.addEventListener("click", ()=>{
    subMenu.classList.toggle("main-menu-additional_visible");
    subMenuBtn.classList.toggle("button_active");
    subMenuBtnIcon.classList.toggle("main-menu-additional-btn-icon_active");
  });



  const notesData = new NotesAPI();
  console.log(notesData.notes)
}
