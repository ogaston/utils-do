const { _searchBy, _validateArgs, addConstant } = require("../Helper/index");
const rncValidation = require("./rnc-validation");

let strictValidation = false;

class Validator {
  /**
   * Set strict mode for params types of the methods
   *
   * @param {boolean} value
   */
  setStrictValidation(value) {
    strictValidation = value;
  }

  /**
   * Validate if the value inserted is a valid dominican id.
   *
   * @param {string | number} id
   * @returns { boolean }
   */
  isAnIde(id) {
    _validateArgs(
      id,
      "the value should be string or number",
      ["string", "number"],
      strictValidation
    );
    return v_id(id);
  }

  /**
   * Return the value formatted as a dominican id.
   *
   * @param {string | number} id
   */
  formatToIde(id) {
    const errMsg = "The value should be string or number";
    _validateArgs(id, errMsg, ["string", "number"], strictValidation);
    const regex = /\(?(\d{3})\)?[- ]?(\d{7})[- ]?(\d{1})/g;
    const result = ("" + id).replace(regex, "$1-$2-$3");
    return result.length === 13 ? result : undefined;
  }

  /**
   * Validate if the value inserted is a valid dominican telephone.
   *
   * @param {string | number} tel
   * @returns { boolean }
   */
  isATel(tel) {
    _validateArgs(
      tel,
      "the value should be string or number",
      ["string", "number"],
      strictValidation
    );
    const regexResult = ("" + tel).match(/\d+/gi);
    const numericTel = Array.isArray(regexResult)
      ? regexResult.join("").match(/^8[0-4]9\d{3}\d{4}$/)
      : null;
    return numericTel !== null;
  }

  /**
   * Return the value formatted as a dominican tel number.
   *
   * @param {string | number} id
   */
  formatToTel(tel) {
    const errMsg = "the value should be string or number";
    _validateArgs(tel, errMsg, ["string", "number"], strictValidation);
    const regex = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g;
    const result = ("" + tel).replace(regex, "($1) $2-$3");
    return result.length === 14 ? result : undefined;
  }

  /**
   * Validate if is a valid RNC
   *
   * @param {string | number} input
   */
  isRNC(input) {
    return rncValidation("" + input);
  }

  /**
   * Return the value formatted as a dominican RNC.
   *
   * @param {string | number} id
   */
  formatToRNC(rnc) {
    const errMsg = "the value should be string or number";
    _validateArgs(rnc, errMsg, ["string", "number"], strictValidation);
    if (this.isRNC(rnc)) {
      const regex = /\(?(\d{3})\)?[- ]?(\d{5})[- ]?(\d{1})/g;
      return ("" + rnc).replace(regex, "$1-$2-$3");
    }
    return undefined;
  }
}

module.exports = new Validator();

function v_id(cid) {
  function g__rd(bn) {
    for (let u = bn; u < bn + 10; u++) {
      if (u % 10 === 0) return u;
    }
  }

  const _c = cid.replace(/\D/g, "");
  let sc = "";

  for (let i = 0; i < 10; i++) {
    const v = Number(_c[i]);
    const m = i % 2;
    const clc = m === 0 ? 1 * v : 2 * v;
    sc = sc += clc.toString();
  }

  const cAr = sc.split("");
  const sm = cAr.reduce((t, n) => +t + Number(n));

  const nd = g__rd(sm);

  const vd = nd - sm;
  const ld = +_c[10];
  return vd === ld;
}
