// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "![License: Apache](https://img.shields.io/badge/license-Apache-blue.svg)";
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/license-ISC-yellow.svg)";
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "[Apache License](https://opensource.org/license/apache-2-0)";
    case "ISC":
      return "[ISC License](https://opensource.org/licenses/ISC)";
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
    case "ISC":
    case "MIT":
      return `
## License

This project is licensed under the ${renderLicenseLink(license)}.  
${renderLicenseBadge(license)}
`;
    case "No License":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions about the project, feel free to contact me via email at [${
    data.email
  }](mailto:${data.email}).  
  More of my work can be found on my [GitHub](https://github.com/${
    data.github
  }/).
  `;
}

module.exports = generateMarkdown;
