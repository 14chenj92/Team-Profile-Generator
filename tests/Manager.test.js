const Manager = require('../lib/Manager');


test('making officenumber', () => {
    const getofficenumber = new Manager('Jon', 1, '09.chen@gmail.com', 100);
    expect (getofficenumber.getofficenumber()).toBe(100);
});

test('making manager role', () => {
    const role = new Manager('Jon', 1, '09.chen@gmail.com', 100);
    expect (role.getRole()).toBe('Manager');
});