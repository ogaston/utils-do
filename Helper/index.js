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
        value: value
    });
    return obj
}

/**
 * Private - Search in a source by the key no matter
 * if the parameter has or not accents mark
 * 
 * @param {array} source 
 * @param {string} parameter 
 */
const _searchBy = (source = [], parameter) => {
    return source.find(
        item => item.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase() ==
        parameter.toLowerCase()
    )
}

/**
 * Private - validate the argument and if it fail throw an UtilError
 * @param {any} arg 
 */
const _validateArgs = (arg, errMsg, types = []) => {
    const _errMsg = errMsg || "the value argument is required and must be string"
    if (!types.length) {
        if (typeof arg !== "string") {
            throw UtilError(_errMsg);
        }
    } else {
        if (!(types.filter(t => typeof arg == t).length)) {
            throw UtilError(_errMsg);
        }
    }
}


module.exports = {
    _validateArgs,
    _searchBy,
    addConstant
}

