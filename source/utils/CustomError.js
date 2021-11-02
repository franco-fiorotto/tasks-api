class CustomError extends Error {
  constructor(type, message = "", ...args) {
    super(...args);
    this.type = type;
    this.message = message;
  }
}

module.exports = CustomError;
