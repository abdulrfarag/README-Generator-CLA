// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "what is the description",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "What is are the installation instructions? ",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "What is the usage information ",
  },
  {
    type: "input",
    name: "contribution",
    message: "list of contribution",
  },
  {
    type: "input",
    name: "guidelines",
    message: "list guidelines",
  },
  {
    type: "input",
    name: "instructions",
    message: "list test instructions",
  },
];
// TODO: Create a function to write README file
function writeToFile(data) {
  return fs.writeFileSync(path.join(process.cwd(), "New_Readme.md"), data);
}

// TODO: Create a function to initialize app
function init() {
  // ask the questions
  inquirer.prompt(questions).then((answers) => {
    // format the answers into a markdown string
    // pass that string to the writeToFile function
    console.log(answers);

    writeToFile(generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
