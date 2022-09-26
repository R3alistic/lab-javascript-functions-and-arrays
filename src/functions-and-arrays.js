// Iteration #1: Find the maximum
function maxOfTwoNumbers(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  }
  else {
    return numberTwo;
  }
}
// Iteration #2: Find longest word
function findLongestWord(wordArray) {
  var longestWord = '';
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  if (wordArray.length === 0) {
    return null;
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sumNumbers(sumArray) {
  var numberSum = 0;
  for (var i = 0; i < sumArray.length; i++) {
    numberSum += sumArray[i];
  }
  return numberSum;
}

// Iteration #4.1
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(someArray) {
  var numberSum = 0;
  for (var i = 0; i < someArray.length; i++) {
    numberSum += someArray[i];
  }
  if (someArray.length == 0) {
    return null;
  }
  return numberSum / someArray.length;
}

// Iteration #4.2

const wordArray = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(anotherArray) {
  var wordSum = 0;
  for (var i = 0; i < anotherArray.length; i++) {
    wordSum += anotherArray[i].length;
  }
  if (anotherArray.length == 0) {
    return null;
  }
  let total = wordSum / anotherArray.length;
  return total;
}

// Iteration #5
function uniquifyArray(someArray) {
  let uArray = [];
  if (someArray.length == 0) {
    return null;
  }
  someArray.forEach((element) => {
    if (!uArray.includes(element)) {
      uArray.push(element);
    }
  })
  return uArray;
}

// Iteration #6
function doesWordExist(someArray, searchItem) {
  if (someArray.includes(searchItem)) {
    return true;
  }
  if (someArray.length == 0) {
    return null;
  }
  else {
    return false;
  }
}
const repArray = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
doesWordExist(repArray, repArray);

// Iteration #7
function howManyTimes(someArray, searchItem) {
  let counter = 0;
  someArray.forEach(element => {
    if (element == searchItem) {
      counter += 1;
    }
  })
  if (someArray.length == 0) {
    return 0;
  }
  return counter;
}
const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
howManyTimes(words, 'matter')
