class PasswordValidator {
  isValid(password) {
    return password.length > 8;
  }
}

module.exports = PasswordValidator;
