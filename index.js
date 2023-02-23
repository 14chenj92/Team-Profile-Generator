const fs = require('fs');
const inquirer = require('inquirer'); 
const generateHTML = require('./generateHTML');

const managerquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager name?',
        validate: nameinput => {            
            if (nameinput) {
            return true;
        } else {
            console.log('Enter the team manager name!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the employee ID?',
        validate: IDinput => {            
            if (IDinput) {
            return true;
        } else {
            console.log('Enter employee ID!');
            return false; 
        }}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailinput => {            
                if (emailinput) {
                return true;
        } else {
                console.log('Enter an email address!');
                return false;
        }}
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is their office number?',
        validate: officeinput => {            
            if (officeinput) {
            return true;
        } else {
            console.log('Enter the office number!');
            return false;
        }}
    },
]

const engineerquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the enigineer name?',
        validate: nameinput => {            
            if (nameinput) {
            return true;
        } else {
            console.log('Enter the engineer name!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the engineer ID?',
        validate: IDinput => {            
            if (IDinput) {
            return true;
        } else {
            console.log('Enter engineer ID!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailinput => {            
                if (emailinput) {
                return true;
        } else {
                console.log('Enter an email address!');
                return false;
        }}
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is their Github username?',
        validate: userinput => {            
            if (userinput) {
            return true;
        } else {
            console.log('Enter the Github username!');
            return false;
        }}
    },
]

const internquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern name?',
        validate: nameinput => {            
            if (nameinput) {
            return true;
        } else {
            console.log('Enter the intern name!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the intern ID?',
        validate: IDinput => {            
            if (IDinput) {
            return true;
        } else {
            console.log('Enter intern ID!');
            return false;
        }}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailinput => {            
                if (emailinput) {
                return true;
        } else {
                console.log('Enter an email address!');
                return false;
        }}
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is their school name?',
        validate: schoolinput => {            
            if (schoolinput) {
            return true;
        } else {
            console.log('Enter the school name!');
            return false;
        }}
    },
]



const writeToFile = data => {
    fs.writeFile('index.html', data, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Your team profile has been created!')
        }
    })
}; 

// starts app
function init() {
    return inquirer.prompt(managerquestions);
}

function init1() {
    return inquirer.prompt(engineerquestions);
}

// function to call app
init()
.then (init1)
.then(data => {
    return generateHTML(data);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err);
});
