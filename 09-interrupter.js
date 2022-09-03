/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will accept a word and return a function. When the function returned by interrupter is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {

  return function (string) {
    let words = string.split(' ');

    for (let i = 0; i < words.length - 1; i++) {
      words[i] = words[i] + ` ${interruptingWord}`
    }

    return words.join(' ');
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
