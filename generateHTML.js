const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Employee = require('./lib/Employee');


module.exports = generateHTML; 

const managercard = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4><i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
      </div>
  </div>
  `;
}

const engineercard = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Manager</h4><i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:">${engineer.email}</a></p>
              <p class="github">Github: ${engineer.username}</p>
          </div>
      </div>
  </div>
  `;
}

const interncard = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Manager</h4><i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
      </div>
  </div>
  `;
}

const htmladd = function () {
  let cards = [];
  if (Employee.getRole() === 'Manager') {
    cards.push(managercard());
} 
if (Employee.getRole() === 'Engineer') {
    cards.push(engineercard());
} 
if (Employee.getRole() === 'Intern') {
    cards.push(interncard());
}
};

const htmlpage = function (card) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./assets/reset.css" />
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  <link rel="stylesheet" href="./style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossorigin="anonymous"
  />
    <body>
  <header class="header">
    <h1>My Team</h1>
  </header>
  ${card}
  <script src="./assets/script.js"></script>

</body>
</html>
`
}