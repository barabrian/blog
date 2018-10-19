
// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of your component?"
  },
  {
    type: 'list',
    name: 'story',
    message: 'Include story component?',
    choices: [{ name: 'Yes', value: true }, { name: 'No', value: false }]
  }
]
