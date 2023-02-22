const Engineer = require('../lib/Engineer');


test('making engineer github', () => {
    const github = new Engineer('Jon', 1, '09.chen@gmail.com', '14chenj92');
    expect (github.getGithub()).toBe('14chenj92');
});

test('making engineer role', () => {
    const role = new Engineer('Jon', 1, '09.chen@gmail.com', '14chenj92');
    expect (role.getRole()).toBe('Engineer');
});