let PasswordValidator = require('../src/password_validator');

describe('Password validator', () => {
  it('is valid when contains more than 8 characters', () => {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('aaaaaaaaA')

    expect(isValid).toBe(true);
  });
  it('is not valid when contains less than 8 characters', () => {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('aaaaaaaa')

    expect(isValid).toBe(false);
  });
  it('is valid when contains at least a capital letter', () => {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('aaaaaaaaA')

    expect(isValid).toBe(true);
  });
});
