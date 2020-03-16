/**
 * Error Handle for Util-Do errors
 *
 * @param {*} message
 * @param {*} type
 */
class UtilError extends Error {
  constructor(message) {
    super(message);
    this.name = "UtilDoPackageError";
  }
}

module.exports = UtilError;
