// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = "README.md";
// Create an array of questions for user input
const questions = [
//Title
{
    type: input,
    name: 'title',
    message:'What is the Title of your project?',
    validate: titleInput => {
        if(titleInput) {
            return true;
        }else {
            console.log('Please enter title of your project');
            return false;
        }
    }
},
//Description
{
    type: 'input',
    name: 'description',
    message: "Add description to your project?",
    validate: descriptionInput => {
        if (description) {
            return true;
        } else {
            console.log('Please enter a good description to your project');
            return false;
        }
    }
},
//Installation
 {
     type:'input',
     name:'installation',
     message: 'How to install this project step-by-step guidance',
     validate: installationInput => {
         if(installationInput) {
             return true;
         } else {
             console.log('Please enter installation instructions');
             return false;
         }
     }
 },
 //Usage
 {
    type:'input',
    name:'usage',
    message: 'Provide usage instructions for users',
    validate: usageInput => {
        if(usageInput) {
            return true;
        } else {
            console.log('Please enter Usage information');
            return false;
        }
    }
},
//Contribution
{
    type:'input',
    name:'contributing',
    message: "How can people Contribute to your project?",
    validate: contributingInput => {
        if(contributingInput) {
            return true;
        } else {
            console.log('Please enter Contribution Guidelines');
            return false;
        }
    }
},
//Test Instructions
{
    type: 'input',
    name: 'test',
    message: 'Please provide instructions on how to test the app?',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('Please enter your use test instructions!');
            return false;
        }
    }
},
// License
{
    type: 'checkbox',
    name: 'license',
    message: 'Which license you have used for your project?',
    choices: ["MIT", 
    "GNU General Public License 2.0", 
    "Apache License 2.0", 
    "None"],
},
//Github user
{
    type: 'input',
    name:'githubUsername',
    message:'What is your GitHub username?',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please provide your github username');
            return false;
        }
    }
},
// Email ID
{
    type: 'input',
    name:'email',
    message:'What is your Email?',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please provide your Email address');
            return false;
        }
    }
},
];

// Create a function to write README file
function writeToFile(fileName, data) {
    //create markdown from data
    const markdown = generateMarkdown(data);
    //Write markdown file
    fs.writeFile(fileName, markdown, function(err) {
            if(err) throw err;
            console.log("Success!");
    });
}

// Create a function to initialize app
function init() {
    //inquirer module
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();

