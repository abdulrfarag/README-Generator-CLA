// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
     {
        type: 'input',
        name: 'description',
        message: 'What is your description'
     },
];
// TODO: Create a function to write README file


// TODO: Create a function to initialize app

    // format the answers into a markdown string

    // pass that string to the writeToFile function



// Function call to initialize app
init();
