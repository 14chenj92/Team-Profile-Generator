// creates cards for roles
const managercard = data => { return data.map(manager => {
  return `
  <div class="col-3 mt-4">
  <div class="card" style="width: 18rem;">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4> <img src="./images/manager.jpg" /></a>
          </div>
          <div class="body">
              <p>ID: ${manager.id}</p>
              <p>Email: <a href="mailto:">${manager.email}</a></p>
              <p>Office Number: ${manager.officenumber}</p>
          </div>
      </div>
  </div>
  `
})}

const engineercard = data => { return data.map(engineer => {
  return `
  <div class="col-3 mt-4">
  <div class="card" style="width: 18rem;">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4> <img src="./images/engineer.png" /></a>
          </div>
          <div class="body">
              <p>ID: ${engineer.id}</p>
              <p>Email: <a href="mailto:">${engineer.email}</a></p>
              <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `
})}

const interncard = data => { return data.map(intern => {
  return `
  <div class="col-3 mt-4">
  <div class="card" style="width: 18rem;">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4> <img src="./images/intern.png" /></a>
          </div>
          <div class="body">
              <p>ID: ${intern.id}</p>
              <p>Email: <a href="mailto:">${intern.email}</a></p>
              <p>School: ${intern.school}</p>
          </div>
      </div>
  </div>
  `
})}

// pushes cards depending on role
generateHTML = (cardarray) => {
  let cards = [];
  const manager = cardarray.filter(data => {
      return data.getRole() === 'Manager';
  });
  const engineer = cardarray.filter(data => {
      return data.getRole() === 'Engineer';
  });
  const intern = cardarray.filter(data => {
      return data.getRole() === 'Intern';
  });
  if (manager) {
      cards.push(managercard(manager));
  } 
  if (engineer) {
      cards.push(engineercard(engineer));
  } 
  if (intern) {
      cards.push(interncard(intern));
  }
  return cards.join('');
  };

module.exports = generateHTML;

// html layout
module.exports = cards => {  
    return`
  <!DOCTYPE html>
  <html lang="en">
    
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./dist/style.css" />
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossorigin="anonymous"/>
  </head>

<body>
  <header class="header">
    <h1>My Team</h1>
  </header>
  <div class="container">
  <div class="row justify-content-center">
  ${generateHTML(cards)}
  </div>
</body>
</html>
`
}

