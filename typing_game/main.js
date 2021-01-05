const quoteText = document.getElementById("quote_text");
const startButton = document.getElementById("start_button");
const inputField = document.getElementById("input_field");
const message = document.getElementById("message");
let currentWordIndex = 0;

// Constants cannot be assigned values but can be modified
// THIS DOES NOT WORK BECAUSE WE ARE ASSIGNING VALUE TO CONSTANT
// message = "Some message"

// THIS DOES WORK BECAUSE WE ARE MODIFYING THE VALUE OF CONSTANT
// const newone = {};
// newone.name = "something";
// console.log(newone);

const quoteArray = [
  "A",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog.",
];
const spanArray = quoteArray.map((quote, i) => `<span>${quote} </span>`);

quoteText.innerHTML = spanArray.join("");

quoteText.childNodes[5].className = "highlight";

// TODO: LOOPS AND ARRAY METHODS

// const sentence1 =" prefix" + quoteArray[0] + "suffix " ;
// const sentence2 = "prefix " + quoteArray[1] + "suffix " ;
// .
// .
// .
// .

// Loop and Conditionals
let arrayOfSentences = [];
for (let i = 0; i < quoteArray.length; i++) {
  const currentWord = quoteArray[i];
  arrayOfSentences.push("prefix " + currentWord + " suffix");
}

// Array methods
const arrayFromMap = quoteArray.map((quote) => "prefix " + quote + " suffix");

let numbers = [];
for (let i = 1; i < 101; i++) {
  numbers.push(i);
}
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);

// console.log({ arrayFromMap });
// console.log({ arrayOfSentences });

// const user = {
//   name: "something",
//   image: "url",
//   tagline: "some tag",
//   email: "some@email",
// };

// const arrayUser = ["something", "url", "some tag", "some@email"];
// arrayUser[1];
// user.image;
