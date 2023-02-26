const fs = require('fs');
const inquirer = require('inquirer'); 
const generateHTML = require('./generateHTML.js');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

teamarray = [];

function teamprompts() {
    inquirer.prompt({
     type: 'list',
     name: 'employeelist',
     message: "What team member would you like to add?",
     choices: ['Manager', 'Engineer', 'Intern', 'I finished adding team members'],
     validate: employeelist => {            
        if (employeelist) {
        return true;
    } else {
        console.log('Choose a role!');
        return false; 
    }}
    })
    .then((data) => {
        if (data.employeelist === 'Manager') {
            managerquestions();
        } else if (data.employeelist === 'Engineer') {
            engineerquestions();
        } else if (data.employeelist === 'Intern') {
            internquestions();
        } else {
            htmlfile();
        }
    }
    )}
    
    
function managerquestions() {
    return inquirer.prompt ([
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
        name: 'officenumber',
        message: 'What is their office number?',
        validate: officeinput => {            
            if (officeinput) {
            return true;
        } else {
            console.log('Enter the office number!');
            return false;
        }}
    },
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.ID, data.email, data.officenumber)
        teamarray.push(manager);
        teamprompts();
    }
    )}

function engineerquestions() {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer name?',
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
    }
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.ID, data.email, data.username)
        teamarray.push(engineer);
        teamprompts();
    }
    )}

function internquestions() {
        return inquirer.prompt ([
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
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.ID, data.email, data.school)
        teamarray.push(intern);
        teamprompts();
    }
    )}
    

function htmlfile() {
    const writeToFile = generateHTML(teamarray);
    fs.writeFile('index.html', writeToFile, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Your team profile has been created!')
        }
    })}
    


// starts app
managerquestions()



