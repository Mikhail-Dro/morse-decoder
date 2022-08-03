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
};

function decode(expr) {
    let currentPosition = 0;
    let ans = '';
    let letterCode = '';
    let letterMorse = '';
    let charMorse = '';
    
    for (let i = 0; i < ( expr.length ) / 10; i++) {
    
        if (expr[currentPosition] == '*') {
            ans += ' ';
            j = 10;
            currentPosition += 10;
        } else {
            for (let j = 0; j < 5; j++) {
        
                for (let k = 0; k < 2; k++) {
                    letterCode += expr[currentPosition];
                    currentPosition += 1;
                }
                if (letterCode == '10') {
                    charMorse = '.';
                } else if (letterCode == '11') {
                    charMorse = '-';
                }
                letterMorse += charMorse;
                letterCode = '';
                charMorse = '';
            }
            ans += MORSE_TABLE[letterMorse];
            letterMorse = '';
        }
    }
    return(ans);
}

module.exports = {
    decode
}