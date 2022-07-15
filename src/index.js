const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};


function decode(expr) {
    const arr = expr.match(/.{1,10}/g);
    console.log(arr);

    let arrOfTwo = [];
    for (let i = 0; i < arr.length; i++) {
        arrOfTwo.push(arr[i].match(/.{1,2}/g));
    }
    console.log(arrOfTwo);

    let arrOfTwoMorze = [];
    for (let i = 0; i < arrOfTwo.length; i++) {
        let str = '';
        for (let j = 0; j < arrOfTwo[i].length; j++) {
            if (arrOfTwo[i][j] === '10') {
                str += '.';
            }
            if (arrOfTwo[i][j] === '11') {
                str += '-'; 
            }
            if (arrOfTwo[i][j] === '**') {
                str = ' ';
                break;
            }
        }
        arrOfTwoMorze.push(str);
    }
    console.log(arrOfTwoMorze);

    const morzeToLetters = arrOfTwoMorze.map((e)=> MORSE_TABLE[e]);
    console.log(morzeToLetters);

    let lettersToString = '';
    for (let i = 0; i < morzeToLetters.length; i++) {
        lettersToString += morzeToLetters[i];
    }

    console.log(lettersToString);
    return lettersToString;

}

module.exports = {
    decode
}