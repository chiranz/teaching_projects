const quoteText = document.getElementById("quote_text");
const startButton = document.getElementById("start_button");
const inputField = document.getElementById("input_field");
const message = document.getElementById("message");
let currentWordIndex = 0;

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

// Loop and conditionals in javascript
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

// DATA STRUCTURES

// Premitive data types
//  bool, str, number, null, undefined
// let myStr = "strkglkfdfkj";
// let myStr1 = "str1";

// const myArr = new Array()
// const myArr = [1, 2, 3, "four", undefined, 6, {}];

// console.log(myArr.slice(1, 4));
// console.log(myArr.slice(3, 10));

// console.log(myArr[1]);
const field = "age";
const item = {
  name: null,
  price: null,
  qty: null,
  estimatedDeliverDate: new Date().getTime(),
};

// THESE TWO ARE SAME
// const myObj = new Object()
// const myObj = {}

// OBJECTS AND ARRAYS ALWAYS MAKE REFERENCE TO ORIGINAL
// AND ORIGINAL GETS MODIFIED IF REFERENCED VALUE IS MODIFIED
// let newItem = item;

// newItem.name = "new item";
// console.log(item);
const newItem = { ...item };
newItem.name = "new item";
console.log(item);

// let username = user.name

const marksOfStudents = [
  {
    name: "Rahul",
    marks: { english: 90, maths: 30, science: 40 },
    phoneNumber: 93845,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
  {
    name: "aswin",
    marks: { english: 50, maths: 90, science: 20 },
    phoneNumber: 3984584,
  },
];

for (let i = 0; i < marksOfStudents.length; i++) {
  const studentObj = marksOfStudents[i];
  console.log(studentObj.name, studentObj.marks.english);
}

const user = {
  username: "",
  email: "",
  bookings: [
    {
      status: "confirmed",
      cost: 1200,
      dayOfBooking: new Date(),
      bookedFor: new Date(),
    },
    {
      status: "pending",
      cost: 1300,
      dayOfBooking: new Date(),
      bookedFor: new Date(),
    },
    {
      status: "completed",
      cost: 1400,
      dayOfBooking: new Date(),
      bookedFor: new Date(),
    },
  ],
};

let totalCost = 0;
for (let i = 0; i < user.bookings.length; i++) {
  totalCost = totalCost + user.bookings[i].cost;
  // totalCost += user.bookings[i].cost
  // if this is the end of the loop? yes i = i + 1
  // is i < user.bookings.length? yes == continue with the loop else skip the loop
}
console.log(totalCost);

// const totalCost = user.bookings.reduce(
//   (prevValue, booking) => prevValue + booking.cost,
//   0
// );
// console.log("some", totalCost);

// const marks = { rahul: 50, aswin: 60, abhi: 40, puspa: 49 };
// const sumOfMarks = marks.rahul + marks.aswin + marks.abhi + marks.puspa;
// console.log(`Average marks = ${sumOfMarks / length}`);

const marks = [
  { name: "rahul", avgmarks: 50 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "rahul", avgmarks: 50 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "rahul", avgmarks: 50 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "rahul", avgmarks: 50 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
  { name: "aswin", avgmarks: 60 },
  { name: "abhi", avgmarks: 40 },
  { name: "puspa", avgmarks: 49 },
];
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i].avgmarks;
}

const length = marks.length;

console.log(`Average marks = ${totalMarks / length}`);
