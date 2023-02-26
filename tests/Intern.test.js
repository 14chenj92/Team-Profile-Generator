const Intern = require('./lib/Intern');


test('making intern school', () => {
    const school = new Intern('Jon', 1, '09.chen@gmail.com', 'school');
    expect (school.getSchool()).toBe('school');
});

test('making intern role', () => {
    const role = new Intern('Jon', 1, '09.chen@gmail.com', 'school');
    expect (role.getRole()).toBe('Intern');
});

