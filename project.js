// Function to reverse string
// We split the sentence into an individual array , we reverse it and then join it together
function reverseString(sentence) {
  const sentenceReverse = sentence.split("").reverse().join("");
  return sentenceReverse;
}

console.log(reverseString("BUGATTI"));

// Count Characters, WE USE THE DOT LENGTH FOR COUNTING
function wordLength(word) {
  return word.length;
}

var result = wordLength(
  "I GOT EYES AT THE BACK OF MY HEAD I GOT EYES EVERYWHERE SO I KNOW YOU LOW"
);

console.log(result);

// CAPITALISE FIRST LETTER
// Split the sentence into words
// Capitalize the first letter of each word and then put them back into a string
let myString = "how do i pay funds send aza or send wallet evian dey";

let words = myString.split(" ");

let capitalizedWords = words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

console.log(capitalizedWords);

// maximum and minimum values in an array of numbers

let randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.round(Math.random() * 100));
}

console.log(...randomNumbers);

function getMaxMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];

  for (let number of numbers) {
    //  This is a ternary operator that updates max if the current number is greater than the current max. Otherwise, it keeps the existing max.
    max = number > max ? number : max;
    //  This is a ternary operator that updates min if the current number is less than the current min. Otherwise, it keeps the existing min.
    min = number < min ? number : min;
  }

  return { max, min };
}

console.log(getMaxMin(randomNumbers));

//Create a function that calculates the sum of all elements in an array.
function addSum(figure) {
  let sum = 0;
  for (let i = 0; i < figure.length; i++) {
    sum += figure[i];
  }

  // Return the sum
  return sum;
}

// the calling
let myfigure = [3, 2, 8, 4, 9];
console.log(addSum(myfigure));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, conFunction) {
  return arr.filter(conFunction);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// to choose even numbers
function isEven(number) {
  return number % 2 === 0;
}

// Filter the numbers array based on the isEven condition
let evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers);

// Write a function to calculate the factorial of a given number.
let n = 5;

function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

console.log(factorial(n));

// Function to check prime number

function checkPrime(pNum) {
  if (pNum <= 1) {
    console.log(pNum + " is not prime");
    return;
  }
  if (pNum === 2) {
    console.log(pNum + " is prime");
    return;
  }
  if (pNum % 2 === 0) {
    console.log(pNum + " is not prime");
    return;
  }

  for (let i = 3; i <= Math.sqrt(pNum); i += 2) {
    if (pNum % i === 0) {
      console.log(pNum + " is not prime");
      return;
    }
  }

  console.log(pNum + " is prime");
}

console.log(checkPrime(8));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
