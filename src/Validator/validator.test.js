const Validator = require("./index");
const UtilError = require("../Error");

describe("Validator IDE test", () => {
  test("isAnIde should be true if is a valid Dominicans Id", () => {
    Validator.setStrictValidation(true);
    expect(Validator.isAnIde).toThrowError(UtilError);
    expect(Validator.isAnIde(40240953303)).toBeTruthy();
    expect(Validator.isAnIde("402-7777777-7")).toBeFalsy();
    expect(Validator.isAnIde("00112851662")).toBeTruthy();
  });

  test("formatToIde should return a string with as a formated id, if it cant return undefined.", () => {
    Validator.setStrictValidation(true);
    expect(Validator.formatToIde).toThrowError(UtilError);
    expect(Validator.formatToIde("40258789789784")).toBeUndefined();
    expect(Validator.formatToIde(40240953303)).toEqual("402-4095330-3");
    expect(Validator.formatToIde("402-40953303")).toEqual("402-4095330-3");
    expect(Validator.formatToIde("00112851662")).toEqual("001-1285166-2");
  });
});

describe("Validator Telephone test", () => {
  test("isATel should be true if is a valid Dominicans tel number", () => {
    Validator.setStrictValidation(true);
    expect(Validator.isATel).toThrowError(UtilError);
    expect(Validator.isATel("80954888889")).toBeFalsy();
    expect(Validator.isATel(8095564125)).toBeTruthy();
    expect(Validator.isATel("829-556-4125")).toBeTruthy();
    expect(Validator.isATel("8495564125")).toBeTruthy();
    expect(Validator.isATel("85954888889")).toBeFalsy();
  });

  test("formatToTel should return a string with as a formated tel number, if it cant return undefined.", () => {
    Validator.setStrictValidation(true);
    expect(Validator.formatToTel).toThrowError(UtilError);
    expect(Validator.formatToTel("8008095564128")).toBeUndefined();
    expect(Validator.formatToTel(8095564125)).toEqual("(809) 556-4125");
    expect(Validator.formatToTel("829-5564125")).toEqual("(829) 556-4125");
    expect(Validator.formatToTel("8495564125")).toEqual("(849) 556-4125");
  });
});

describe("Rnc test", () => {
  test("isRNC should be true if is a valid Dominicans RNC number", () => {
    expect(Validator.isRNC("1010277978")).toBeFalsy();
    expect(Validator.isRNC("101027797")).toBeTruthy();
    expect(Validator.isRNC(101027797)).toBeTruthy();
    expect(Validator.isRNC("101-65638-7")).toBeTruthy();
  });

  test("isRNC should return a string with as a formated RNC, if it cant return undefined", () => {
    expect(Validator.formatToRNC("1010277978")).toBeUndefined();
    expect(Validator.formatToRNC("101027797")).toEqual("101-02779-7");
    expect(Validator.formatToRNC(101027797)).toEqual("101-02779-7");
    expect(Validator.formatToRNC("101-65638-7")).toEqual("101-65638-7");
  });
});
