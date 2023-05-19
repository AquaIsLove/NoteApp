window.addEventListener("load", main);

function main() {


  const themeBtn = document.getElementById("theme-btn");
  const page = document.getElementById("page");
  const sidebar = document.getElementById("sidebar-wrapper");
  const menuBtn = document.getElementById("menu-btn");
  const submenuBtn = document.getElementById('sub-menu-btn');
  const submenu = document.getElementById('submenu');

  themeBtn.addEventListener("click", ()=>{
    page.classList.toggle('page_dark');
  });

  menuBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle('sidebar-wrapper_hidden');
    menuBtn.classList.toggle('button_active')
  });

  submenuBtn.addEventListener('click', ()=>{
    submenu.classList.toggle('main-menu__submenu_visible')
    submenuBtn.classList.toggle('button_active')
    submenuBtn.classList.toggle('submenu_btn_active')
  })
}
