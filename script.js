/*
0) create variable called current word and set it to the empty string
1) create for loop 
2) If the element is not a space or skipped item - add it to the current word
3) if it is a space - push the current word to the set/array using toUPperCase and set the current word to the empty string
4) show the 
*/

/* DECLARING VARIABLES FOR UI */

const openWordChecker = document.getElementById('words-checker');
const openItemsChecker = document.getElementById('items-checker');
const submitWords = document.getElementById('words-submit-btn');
const submitItems = document.getElementById('items-submit-btn');
const welcomeArea = document.querySelector('.welcome-area');
const wordsCheckerArea = document.querySelector('.words-checker');
const itemsCheckerArea = document.querySelector('.calculator-area');
const logo = document.querySelector('.logo');
const textLengthResult = document.querySelector('.text-length-result');
const uniqueWordsResultNumber = document.querySelector('.unique-words-result-numb');
const numberOfWordsResult = document.querySelector('.number-of-words-result');
const uniqueWordsResult = document.querySelector('.unique-words-result');
const wordsResult = document.querySelector('.words-result-2');



/* DECLARING VARIABLES FOR CHECKER */

let text = '';
let textArr = [];
let textSet = new Set();
let currentWord = '';
const dividers = [' ', ',', '!', '?','"', '\n', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/n'];
let operation;

/* VARIABLES FOR CALCULATOR */
let inputString = '';

const calcTextarea = document.getElementById('calc-text');
const btnCE = document.getElementById('btn-CE');
const btnC = document.getElementById('btn-C');
const btnDelete = document.getElementById('btn-delete');
const btnDivide = document.getElementById('btn-divide');
const btnMultiply = document.getElementById('btn-multiply');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const btnPlusMinus = document.getElementById('btn-plusminus');
const btnDot = document.getElementById('btn-dot');
const btnEqual = document.getElementById('btn-equal');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn3 = document.getElementById('btn-3');
const btn2 = document.getElementById('btn-2');
const btn1 = document.getElementById('btn-1');
const btn0 = document.getElementById('btn-0');

const btnsCalculator = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnDivide, btnMultiply, btnMinus, btnPlus, btnDot];

/* APP FLOW ((WORDS CHECKER)) */

/* FUNCTIONS */

// a user clicks on the logo:
logo.addEventListener('click', resetApp);

// a user opens the unique words checker
openWordChecker.addEventListener('click', function(){
    welcomeArea.classList.add('hidden');
    wordsCheckerArea.classList.remove('hidden');
    document.querySelector('.textarea-words').value = '';
    itemsCheckerArea.classList.add('hidden');
    openWordChecker.classList.add('btn-clicked');
} );

// a user submits a text with the words
submitWords.addEventListener('click', function() {
    
    text = document.querySelector('.textarea-words').value.toLowerCase().trimStart().trimEnd();
    
//    if(text.length === 0){
//       document.querySelector('.words-result').classList.remove('hidden');
//     wordsResult.classList.remove('hidden');
//     wordsResult.textContent  = 'Please enter the text ;) '
//    document.querySelector('table').classList.add('hidden');
        
//        const textLengthResult = document.querySelector('.text-length-result');
//const uniqueWordsResultNumber = document.querySelector('.unique-words-result-numb');
//const numberOfWordsResult = document.querySelector('.number-of-words-result');
//const uniqueWordsResult = document.querySelector('.unique-words-result');
        
//     wordsResult.textContent = `${textSet.size} unique words! ${'\n'} ${text.length} symbols and ${textArr.length} words`;
        
//       }else{
           
           textCheck();
    
     document.querySelector('.words-result').classList.remove('hidden');
     wordsResult.classList.remove('hidden');
    
//       }
})

// a user opens unique items checker

openItemsChecker.addEventListener('click', function(){
    welcomeArea.classList.add('hidden');
    itemsCheckerArea.classList.remove('hidden');
    document.getElementById('text-items').value = '';
    openItemsChecker.classList.add('btn-clicked');
    wordsCheckerArea.classList.add('hidden');
})


// Calculator flow

// a user clicks on the equal sign

btnEqual.addEventListener('click', function () {
    const question = calcTextarea.value;
    const solution = eval(question);
    calcTextarea.value = solution;
})

// CALCULATOR FUNCTIONS



for (const button of btnsCalculator){
    button.addEventListener('click', function(){
    inputString = inputString + button.textContent;
    calcTextarea.value  = inputString;
    })
};

btnC.addEventListener('click', function(){
    
})


//////////// TEXT CHECKER 

function textCheck() {
    text = '';
    textArr = [];
    textSet = new Set();
    currentWord = '';
    text = document.querySelector('.textarea-words').value.toLowerCase().trimStart().trimEnd();
    
    for (let i = 0; i < text.length - 1; i++ ) {
        if(dividers.includes(text[i])){
            if(currentWord !== '') {
               textSet.add(currentWord);
               textArr.push(currentWord);
                currentWord = '';
               }
        }else {
            currentWord = currentWord + text[i];
        }
        
    }
    
    if(dividers.includes(text[text.length - 1])){
       textSet.add(currentWord);
       textArr.push(currentWord);
                 
    }else{
        currentWord = currentWord + text[text.length - 1];
        textSet.add(currentWord);
        textArr.push(currentWord);

    }
    console.log(textSet);
    
    let setToArray = Array.from(textSet).join('<br>');
    console.log(setToArray);
    
    uniqueWordsResultNumber.textContent = `${textSet.size}`;
    textLengthResult.textContent = `${text.length}`;    
    numberOfWordsResult.textContent = `${textArr.length}`;
     uniqueWordsResult.innerHTML =  `${setToArray}`;
}

function resetApp() {
    welcomeArea.classList.remove('hidden');
    wordsCheckerArea.classList.add('hidden');
    itemsCheckerArea.classList.add('hidden');
}