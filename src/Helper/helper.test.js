const { _searchBy, _validateArgs, addConstant } = require('./index')
const UtilError = require('../Error')



describe('addConstant test', () => {
    
    test('should create and not modify a constant', () => {
        const newObj = {}
        
        addConstant(newObj, 'CONSTANT', 55);

        expect(newObj.hasOwnProperty('CONSTANT')).toBeTruthy();
        expect(newObj.CONSTANT).toBe(55);
        newObj.CONSTANT = 100;
        expect(newObj.CONSTANT).toBe(55);
    });

})

describe('_searchBy test', () => {

    test('should search a value (case unsensitive) in array', () => {
        const newArr = ["Gastón","Juan Carlos","Chalas"]
        const searchedValue = "gaston";
        const wrongValue = "Oscar";

        const result = _searchBy(newArr, searchedValue);
        const failedResult = _searchBy(newArr, wrongValue);
        expect(result).toBe("Gastón");
        expect(failedResult).toBeUndefined();
    });

})


describe('_validateArgs test', () => {

    test('should throw an error if the arguments is not as we expected', () => {
        const types = ["string", "number"]

        expect(_validateArgs("Hello")).toBeUndefined(); 
        expect(() => _validateArgs()).toThrowError(UtilError)
        expect(() => _validateArgs("Romana", "the value must be string or number", types)).not.toThrowError(UtilError)
        expect(() => _validateArgs(1, "the value must be string or number", types)).not.toThrowError(UtilError)
        expect(() => _validateArgs(true, "the value must be string or number", types)).toThrowError(UtilError)
    });
    
})
