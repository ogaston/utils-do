const UtilError = require("../Error");

/**
 * Private - define a constant property
 * This function is not pure!
 * @param {Class | Object} obj
 * @param {string} key
 * @param {any} value
 * @returns Class | Object
 */
const addConstant = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    enumerable: false,
    configurable: false,
    writable: false,
    value: value,
  });
  return obj;
};

/**
 * Private - Search in a source by the key no matter
 * if the parameter has or not accents mark
 *
 * @param {array} source
 * @param {string} parameter
 */
const _searchBy = (source = [], parameter) => {
  return source.find(
    (item) =>
      item
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase() ==
      parameter
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
  );
};

/**
 * Private - Return a handle function of the util error. if isStrict will throw the error, otherwise just show in the console.
 *
 * @param {boolean} isStrict
 * @param {UtilError} errObj
 */
const _execError = (isStrict, errObj) => {
  return isStrict
    ? () => {
        throw new UtilError(errObj);
      }
    : () => {
        console.error(errObj);
      };
};

/**
 * Private - validate the argument and if it fail throw an UtilError
 * @param {any} arg
 */
const _validateArgs = (arg, errMsg, types = [], isStrict = false) => {
  const _errMsg = errMsg || "the value argument is required and must be string";
  const execErr = _execError(isStrict, _errMsg);
  if (!types.length) {
    if (typeof arg !== "string") execErr();
  } else {
    if (!types.filter((t) => typeof arg == t).length) {
      execErr();
    }
  }
};

module.exports = {
  _validateArgs,
  _searchBy,
  addConstant,
};
