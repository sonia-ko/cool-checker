/* DECLARING VARIABLES FOR UI */

const openWordChecker = document.getElementById("words-checker");
const welcomeArea = document.querySelector(".welcome-area");
const wordsCheckerArea = document.querySelector(".words-checker");
const calculatorArea = document.querySelector(".calculator-area");
const logo = document.querySelector(".logo");
const openCalculator = document.getElementById("calculator");
const menuIcon = document.querySelector(".menu-container");
const closeMenuBtn = document.querySelector(".close-menu-btn");
let menuOpened = false;
const sideNavigation = document.querySelector(".sidenav");
const taskTrackerAreaUI = document.querySelector("#task-tracker-area");
const openTaskTracker = document.querySelector("#task-tracker-btn");

let operation;

// fade effect for the menu links

const handleHover = function (e) {
  if (e.target.classList.contains("nav-item")) {
    const activeItem = e.target;
    const siblings = activeItem
      .closest(".sidenav")
      .querySelectorAll(".nav-item");
    console.log(siblings);
    siblings.forEach((el) => {
      if (el !== e.target) el.style.opacity = this;
    });
  }
};

sideNavigation.addEventListener("mouseover", handleHover.bind(0.2));
sideNavigation.addEventListener("mouseout", handleHover.bind(1));

// a user opens the menu icon
menuIcon.addEventListener("click", function () {
  if (menuOpened === false) {
    document.getElementById("mySidenav").style.width = "23%";
    document.getElementById("main").style.marginLeft = "23%";
    menuOpened = true;
    menuIcon.classList.toggle("change");
  } else {
    closeNav();
  }
});

closeMenuBtn.addEventListener("click", closeNav);

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  menuOpened = false;
  menuIcon.classList.toggle("change");
}

// a user clicks on the logo:

logo.addEventListener("click", resetApp);

// a user opens the unique words checker

openWordChecker.addEventListener("click", function () {
  hideTools();
  wordsCheckerArea.classList.remove("hidden");
  document.querySelector(".textarea-words").value = "";
  closeNav();
});

function resetApp() {
  hideTools();
  welcomeArea.classList.remove("hidden");
  closeNav();
}

// a user opens calculator

openCalculator.addEventListener("click", function () {
  hideTools();
  calculatorArea.classList.remove("hidden");
  closeNav();
});

// a user opens task tracker

openTaskTracker.addEventListener("click", function () {
  hideTools();
  taskTrackerAreaUI.classList.remove("hidden");
  closeNav();
});

// function that removes all tools:

function hideTools() {
  welcomeArea.classList.add("hidden");
  wordsCheckerArea.classList.add("hidden");
  calculatorArea.classList.add("hidden");
  taskTrackerAreaUI.classList.add("hidden");
}
