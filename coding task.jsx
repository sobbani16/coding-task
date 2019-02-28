// ES5 syntax
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.time('function runtime');
reverseString('Prashanth Sobbani');
console.timeEnd('function runtime');

// ES6 syntax

var reverseString = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.time('function runtime');
reverseString('Prashanth Sobbani');
console.timeEnd('function runtime');

// ES5 syntax

function wordCounter(paragraph){
    var words = {};
    var eachWord = "";
    wordArr = paragraph.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_@`~()]/g,"").toLowerCase().split(" ");
    for(let eachWordIndex in wordArr){
        eachWord = wordArr[eachWordIndex];
        if(eachWord in words){
            words[eachWord] += 1;
        }
        else{
            words[eachWord] = 1;
        }
    }
    console.log(words);
}
// ES6 syntax

var wordCounter = (paragraph) => {
    var words={};
    wordArr = paragraph.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_@`~()]/g,"").toLowerCase().split(" ");
    
    wordArr.map((eachWord, index, array) => {
        words[eachWord] = eachWord in words ? words[eachWord]+1 : 1;
    })

    console.log(words);
}

wordCounter(` Walmart Technology is reinventing the way the world shops and we’ve only just begun. Our team includes @Walmart Labs in Silicon Valley and Bengaluru, which powers the eCommerce experience, as well as technology teams across data and analytics, retail, back office and more who help power store and digital experiences. `);