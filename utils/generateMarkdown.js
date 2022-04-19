//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'no license') {
    return `
   ![Badge](https://img.shields.io/badge/License-${license}-blueviolet)
    `; 
  }else { 
    return '';
  }
}
//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'no license') {
    return`
   ![License: ${license}](https://img.shields.io/badge/License-${license}-blueviolet.svg)
    `;
  } else {
    return '';
  }
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'no license') {
    return`
  
    This project is covered under the following license:
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}


// create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#Installation)
  4. [Usage](#usage)
  5. [Contribute](#contribute)
  6. [Tests](#tests)
  7. [License](#license)
  8. [Github](#github)
  9. [Questions](#email)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribute
  ${data.contribute}
  
  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## GitHub
  [GitHub](https://github.com/${data.github})
  ## Email
  ${data.email}
  `;
}
module.exports = generateMarkdown;
