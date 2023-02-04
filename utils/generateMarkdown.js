// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `
   # ${answers.title}
   ${answers.description}
   ${answers.installationInstructions}
   ${answers.usageInformation}
   ${answers.contribution}
   ${answers.guidelines}
   ${answers.instructions}
   ## This is a subtitle
   This is a paragraph below the subtitle

   - List item 1
   - List Item 2
   - List Item 3

   Visit my GitHub page: ${answers.github}

  `
}


module.exports = generateMarkdown;
