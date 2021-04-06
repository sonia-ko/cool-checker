(function () {
    
    // variables for UI

const textLengthResult = document.querySelector('.text-length-result');
const uniqueWordsResultNumber = document.querySelector('.unique-words-result-numb');
const numberOfWordsResult = document.querySelector('.number-of-words-result');
const uniqueWordsResult = document.querySelector('.unique-words-result');
const wordsResult = document.querySelector('.words-result-2');
const submitWords = document.getElementById('words-submit-btn');
    
    
    // variables for checker
    
let text = '';
let textArr = [];
let textSet = new Set();
let currentWord = '';
const dividers = [' ', ',', '!', '?','"', '\n', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/n'];
    
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

})();

