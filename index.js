// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your projects title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your projects description?",
    name: "description",
  },
  {
    type: "input",
    message: "What are your projects installation steps?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are your projects usage examples?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license did your project have?",
    name: "license",
    choices: ["Apache", "ISC", "MIT", "No License"],
  },
  {
    type: "input",
    message: "What are your projects contributers if any?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What tests did you run on your project? if any?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README.md file generated");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    const readMePage = generateMarkdown(answer);
    writeToFile("README.md", readMePage);
  });
}

// Function call to initialize app
init();
