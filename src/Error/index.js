
/**
 * Error Handle for Util-Do errors
 * 
 * @param {*} message 
 * @param {*} type 
 */
function UtilError(message, type) {
    this.name = "UtilError" + (" | " + type || " | ");
    this.message = (message || "");
}

UtilError.prototype = Error.prototype;

module.exports = UtilError;