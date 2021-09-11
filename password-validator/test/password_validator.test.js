let PasswordValidator = require('../src/password_validator');

describe('Password validator', () => {
  let passwordValidator;
  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  })

  it('is valid when contains all the rules', () => {
    let isValid = passwordValidator.isValid('a-------A3_')

    expect(isValid).toBe(true);
  });
  it('is not valid when contains less than 8 characters', () => {
    let isValid = passwordValidator.isValid('a----A3_')

    expect(isValid).toBe(false);
  });
  it('is valid when contains at least a capital letter', () => {
    let isValid = passwordValidator.isValid('a-------3_')

    expect(isValid).toBe(false);
  });
  it('is valid when contains at least a lowercase', () => {
    let isValid = passwordValidator.isValid('A------3_')

    expect(isValid).toBe(false);
  });
  it('is valid when contains a number', () => {
    let isValid = passwordValidator.isValid('a------A_')

    expect(isValid).toBe(false);
  });
  it('is valid when contains an underscore', () => {
    let isValid = passwordValidator.isValid('a-----A-3')

    expect(isValid).toBe(false);
  });
});
