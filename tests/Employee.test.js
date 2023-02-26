const Employee = require('./lib/Employee');


test('making employee name', () => {
    const name = new Employee('Jon', 1, '09.chen@gmail.com');
    expect (name.getName()).toBe('Jon');
});

test('making employee ID', () => {
    const ID = new Employee('Jon', 1, '09.chen@gmail.com');
    expect (ID.getID()).toBe(1);
});


test('making employee email', () => {
    const email = new Employee('Jon', 1, '09.chen@gmail.com');
    expect (email.getEmail()).toBe('09.chen@gmail.com');
});

test('making employee role', () => {
    const role = new Employee('Jon', 1, '09.chen@gmail.com');
    expect (role.getRole()).toBe('Employee');
});