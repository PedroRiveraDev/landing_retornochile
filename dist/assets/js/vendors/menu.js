const menu = document.querySelector(".menu-block");
const menuMain = menu?.querySelector(".site-menu-main");
const submenuAll = menu?.querySelectorAll(".sub-menu");
const goBack = menu?.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu?.querySelector(".mobile-menu-close");
let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
  return array[array.length - 1];
}
function last2(array) {
  return array[array.length - 2];
}

menuMain?.addEventListener("click", (e) => {
  if (!menu?.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".nav-item-has-children")) {
    const hasChildren = e.target.closest(".nav-item-has-children");

    showSubMenu(hasChildren);
  }
});
goBack?.addEventListener("click", () => {
  const lastItem = last(subMenuArray);
  const lastItemText = last2(subMenuTextArray);
  subMenuArray.pop();
  subMenuTextArray.pop();
  if (subMenuArray.length >= 0) {
    document.getElementById(lastItem).style.animation =
      "slideRight 0.5s ease forwards";
    const currentMenuTitle = menu?.querySelector(".current-menu-title");
    if (currentMenuTitle) {
      currentMenuTitle.innerHTML = lastItemText;
    }
    setTimeout(() => {
      document.getElementById(lastItem).classList.remove("active");
    }, 300);
  }
  if (subMenuArray.length == 0) {
    const mobileMenuHead = menu?.querySelector(".mobile-menu-head");
    if (mobileMenuHead) {
      mobileMenuHead.classList.remove("active");
    }
  }
});
menuTrigger?.addEventListener("click", () => {
  toggleMenu();
});
closeMenu?.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay")?.addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu?.classList.toggle("active");
  document.querySelector(".menu-overlay")?.classList.toggle("active");
}
function showSubMenu(hasChildren) {
  if (!submenuAll) return;
  
  for (let i = 0; i < submenuAll.length; i++) {
    submenuAll[i].classList.remove("active");
  }
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenuArray.push(subMenu.id);
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
  subMenuTextArray.push(menuTitle);

  const currentMenuTitle = menu?.querySelector(".current-menu-title");
  if (currentMenuTitle) {
    currentMenuTitle.innerHTML = menuTitle;
  }
  const mobileMenuHead = menu?.querySelector(".mobile-menu-head");
  if (mobileMenuHead) {
    mobileMenuHead.classList.add("active");
  }
}
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu?.classList.contains("active")) {
      toggleMenu();
    }
  }
};
