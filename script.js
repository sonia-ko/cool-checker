

/* DECLARING VARIABLES FOR UI */

const openWordChecker = document.getElementById('words-checker');
const welcomeArea = document.querySelector('.welcome-area');
const wordsCheckerArea = document.querySelector('.words-checker');
const calculatorArea = document.querySelector('.calculator-area');
const logo = document.querySelector('.logo');
const openCalculator = document.getElementById('calculator');
const menuIcon = document.querySelector('.menu-container');
const closeMenuBtn = document.querySelector('.close-menu-btn');
let menuOpened = false;


let operation;

// a user opens the menu icon
menuIcon.addEventListener('click', function(){
    
 if(menuOpened === false){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  menuOpened = true;
  menuIcon.classList.toggle("change");
    }else{
        closeNav();
        
    }
    
})

closeMenuBtn.addEventListener('click', closeNav);



/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  menuOpened = false;
  menuIcon.classList.toggle("change");
}

// a user clicks on the logo:

logo.addEventListener('click', resetApp);

// a user opens the unique words checker

openWordChecker.addEventListener('click', function(){
    welcomeArea.classList.add('hidden');
    wordsCheckerArea.classList.remove('hidden');
    document.querySelector('.textarea-words').value = '';
    calculatorArea.classList.add('hidden');
    openWordChecker.classList.add('btn-clicked');
} );


function resetApp() {
    welcomeArea.classList.remove('hidden');
    wordsCheckerArea.classList.add('hidden');
    calculatorArea.classList.add('hidden');
}

// a user opens calculator

console.log(openCalculator)

openCalculator.addEventListener('click', function(){
    console.log('Button clicked!')
    welcomeArea.classList.add('hidden');
    wordsCheckerArea.classList.add('hidden');
    calculatorArea.classList.remove('hidden');
 
});