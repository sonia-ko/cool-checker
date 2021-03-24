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
const itemsCheckerArea = document.querySelector('.items-checker');
const logo = document.querySelector('.logo');

/* DECLARING VARIABLES FOR CHECKER */

let text = '';
let textArr = [];
let textSet = new Set();
let currentWord = '';
const dividers = [' ', ',', '!', '?','"', '\n', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/n'];

/* APP FLOW */

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
    
    textCheck();
    
     document.querySelector('.words-result').classList.remove('hidden');
     document.querySelector('.words-result-2').classList.remove('hidden');
     document.querySelector('.words-result-2').textContent = `${textSet.size} unique words! ${'\n'} ${text.length} symbols and ${textArr.length} words`;
})

// a user opens unique items checker

openItemsChecker.addEventListener('click', function(){
    welcomeArea.classList.add('hidden');
    itemsCheckerArea.classList.remove('hidden');
    document.getElementById('text-items').value = '';
    openItemsChecker.classList.add('btn-clicked');
    wordsCheckerArea.classList.add('hidden');
})


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
}

function resetApp() {
    welcomeArea.classList.remove('hidden');
    wordsCheckerArea.classList.add('hidden');
    itemsCheckerArea.classList.add('hidden');
}
