// Listing Directory Files

// const fs = require("fs");

// fs.readdir("./", function (err, files) {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
// });

// console.log("reading files...");

// Done

// Reading files

// const fs = require("fs");

// fs.readFile("./first_chap.html", "UTF-8", (err, style) => {
//   console.log(style);
// });

// console.log("reading the file...");

// DOne

// Writing and appending files

// const fs = require("fs");

// let md = `
//     This is a New File
//     ==================

//     ES6 Template Strings are cool. They honor whitespace.

//     * Template Strings
//     * Node File System
//     * Readline CLIs
// `;

// fs.writeFile("javascript.md", md.trim(), function (err) {
//   if (err) {
//     throw err;
//   }
//   fs.appendFileSync(
//     "javascript.md",
//     "\n\n### Node.js Everyone!"
//   );
//   console.log("Markdown Created");
// });

// Done

// Creating directories

// const fs = require("fs");

// if (fs.existsSync("your-files-here")) {
//   console.log("already there!");
// } else {
//   fs.mkdir("your-files-here", function (err) {
//     if (err) {
//       console.log(`ERROR: ${err}`);
//     } else {
//       console.log("directory created");
//     }
//   });
// }

// Done

// Renaming and removing files

// const fs = require("fs");

// fs.renameSync("./rename2.js", "./rename-hannu2.js");

// console.log("rename2`.js file renamed");

// fs.renameSync("./rename.js", "./rename-hannu.js");

// console.log("rename.js file renamed");

// fs.rename("./lib/notes.md", "./notes.md", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Notes markdown file moved");
// });

// fs.unlinkSync("./rename-hannu.js");

// fs.unlink("notes.md", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Notes are gone");
// });


// Done

// Renaming and removing directories

const fs = require("fs");

// fs.renameSync("./assets/logs", "./accounts/logs");
// console.log("logs folder moved");

// fs.rmdir("./assets", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("./assets directory removed");
//   }
// });

fs.readdirSync("./accounts").forEach((file) => {
  fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log("Files Removed");
fs.rmdirSync("./accounts");
console.log("Folder Removed");

// Done

// 