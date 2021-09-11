class PasswordValidator {
  isValid(password) {
    return this.hasMoreThan8Characters(password) &&
        this.containsACapitalLetter(password) &&
        this.containsALowercase(password) &&
        this.containsANumber().test(password) &&
        this.containsAnUnderscore().test(password);
  }


  hasMoreThan8Characters(password) {
    return password.length > 8;
  }
  containsACapitalLetter(password) {
    return /[A-Z]/.test(password);
  }
  containsALowercase(password) {
    return /[a-z]/.test(password);
  }
  containsANumber() {
    return /[0-9]/;
  }
  containsAnUnderscore() {
    return /[_]/;
  }
}

module.exports = PasswordValidator;
