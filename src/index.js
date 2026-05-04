const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const BINARY_MORSE = {
    10: '.',
    11: '-',
  };

  const encodedLetters = expr.match(/.{10}/g);

  const decodedMessage = encodedLetters.map((letter) => {
    if (letter === '**********') return ' ';

    const morseCode = letter
      .replace(/^0+/, '')
      .match(/.{2}/g)
      .map((pair) => BINARY_MORSE[pair])
      .join('');

    return MORSE_TABLE[morseCode];
  });

  return decodedMessage.join('');
}

module.exports = decode;
