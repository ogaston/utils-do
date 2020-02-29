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

UtilError.prototype = Error.prototype;

module.exports = UtilError;
