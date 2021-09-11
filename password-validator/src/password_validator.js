class PasswordValidator {
  isValid(password) {
    return password.length > 8 && /[A-Z]/.test(password);
  }
}

module.exports = PasswordValidator;
