class PasswordValidator {
  isValid(password) {
    return password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password);
  }
}

module.exports = PasswordValidator;
