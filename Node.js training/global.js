// let hello = "Hello World from Node.js";
// let justNode = hello.slice(17);
// const path = require ("path");
// console.log(`Who let the ${justNode} out?`);
// console.log (__dirname);
// console.log(__filename);
// // console.log(`The file name is ${path.basename(__filename)}`);

// function grab(flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
//   }
  
//   let greeting = grab("--greeting");
//   let user = grab("--user");
  
//   console.log(greeting);
//   console.log(user);
  

// process.stdout.write("Hello  \n \n");

// const questions = [
//   "What is your name?",
//   "What would you rather be doing?",
//   "What is your preferred programming language"
// ];
// const answers = [];

// function ask(i) {
//   process.stdout.write(`\n\n\n ${questions[i]}`);
//   process.stdout.write(` > `);
// }

// process.stdin.on("data", function (data) {
//   process.stdout.write(data.toString().trim());
// });

// ask(answers.length);

// process.stdout.write("Hello  \n ");

// const questions = [
//   "What is your name?",
//   "What would you rather be doing?",
//   "What is your preferred programming language"
// ];
// const answers = [];

// function ask(i = 0) {
//   process.stdout.write(`\n ${questions[i]}`);
//   process.stdout.write(` > `);
// }

// ask();

// process.stdin.on("data", function (data) {
//   answers.push(data.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// process.on("exit", function () {
//   process.stdout.write("\n");
//   process.stdout.write(
//     `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
//   );
// });
// Done

// Creating a delay with setTimeout

// const waitTime = 3000;
// console.log(`setting a ${waitTime / 1000} second delay`);
// const timerFinished = () => console.log("done");
// setTimeout(timerFinished, waitTime);

// Done

// Incorporating setInterval

const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);console.log("done");}

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime/1000}  Seconds`)
};

const interval = setInterval(incTime, waitInterval);

// Done

//Reporting progress with setInterval



// const waitTime = 3000;
// console.log(`setting a ${waitTime / 1000} second delay`);
// const timerFinished = () => {
//   clearInterval(interval);
//   console.log("done");
// };

// setTimeout(timerFinished, waitTime);

// const waitInterval = 500;
// let currentTime = 0;
// const incTime = () => {
//   currentTime += waitInterval;
//   const p = Math.floor((currentTime / waitTime) * 100);
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write(`waiting.... ${p}`);
// };

// const interval = setInterval(incTime, waitInterval);

//Done
