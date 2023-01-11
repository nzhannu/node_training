// Understandign Core Modules

// const path = require("path");
// const util = require("util");
// const v8 = require("v8");
// console.log(path.basename(__filename));
// const dirUploads = path.join(
//   __dirname,
//   "www",
//   "files",
//   "uploads"
// );
// util.log(dirUploads);
// util.log(path.basename(__filename));

// util.log(v8.getHeapStatistics());

// DOne

// Collecting information with readline


// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("How do you like Node?", (answer) => {
//   console.log(`Your answer: ${answer}`);
// });

// Done

// Using readline

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function collectAnswers(questions, done) {
//   const answers = [];
//   const [firstQuestion] = questions;

//   const questionAnswered = (answer) => {
//     answers.push(answer.trim());
//     if (answers.length < questions.length) {
//       rl.question(
//         questions[answers.length],
//         questionAnswered
//       );
//     } else {
//       return done(answers);
//     }
//   };

//   rl.question(firstQuestion, questionAnswered);
// }

// const questions = [
//   "What is your name?",
//   "Where do you live?",
//   "What are you going to do with Node.js?"
// ];

// collectAnswers(questions, (answers) => {
//   console.log("Thank you for your answers!");
//   console.log(answers);
//   process.exit();
// });

// Done

// Exporting custom modules (Use App.js and core.js)

