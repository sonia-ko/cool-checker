

/* DECLARING VARIABLES FOR UI */

const openWordChecker = document.getElementById('words-checker');
const openItemsChecker = document.getElementById('items-checker');
const welcomeArea = document.querySelector('.welcome-area');
const wordsCheckerArea = document.querySelector('.words-checker');
const calculatorArea = document.querySelector('.calculator-area');
const logo = document.querySelector('.logo');
const openCalculator = document.getElementById('calculator');



let operation;


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