//Exporting custom modules  

// const { inc, dec, getCount } = require("./modules");

// inc();
// inc();
// inc();

// console.log(`the count is ${getCount()}`);

// Done

// Creating a module 

// const events = require("events");

// let emitter = new events.EventEmitter();

// emitter.on("customEvent", (message, user) => {
//   console.log(`${user}: ${message}`);
// });

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool", "Hannu");

// process.stdin.on("data", (data) => {
//   const input = data.toString().trim();
//   if (input === "exit") {
//     emitter.emit("customEvent", "Goodbye!", "process");
//     process.exit();
//   }
//   emitter.emit(
//     "customEvent",
//     data.toString().trim(),
//     "terminal"
//   );
// });

// Done

// Custom events with the EventEmitter

const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?"
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});

answerEvents.on ("answer", (answer) =>
console.log(`The answer is ${answer}`));

// Done