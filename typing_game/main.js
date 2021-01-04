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
console.log(quoteText.childNodes);

quoteText.childNodes[5].className = "highlight";
