//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'no license') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blueviolet)
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
    [${license}](https://choosealicense.com/licenses/${license})
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
    ## License
    (#Table-of-Contents)
    The application is covered under the following license:
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
  3. [Usage](#usage)
  4. [Contribution](#contributing)
  5. [Test-instructions](#test)
  6. [License](#license)
  7. [Github-user](#githubUsername)
  8. [contact](#email)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Usage

  ${data.usage}

  ## Contributions
  ${data.contributing}
  
  ## Test-Instructions
  ${data.test}

  ## License
  ${renderLicenseSection(data.license)}

  ## GitHub
  ${data.githubUsername}

  ## Email
  ${data.email}
  `;
}
module.exports = generateMarkdown;
