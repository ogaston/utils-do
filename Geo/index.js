const { provinces, regions } = require("./geo-data");
const UtilError = require("../Error/index");


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
const _validateArgs = arg => {
    if (typeof arg !== "string") {
        throw UtilError("the province argument is required and must be string");
    }
}

/**
 * Class related to geographical locations
 */
class Geo {
    /**
     * Return an array of string with the name of each province
     * @returns {string[]} provinces
     */
    getProvinces() {
        return Object.keys(provinces);
    }

    /**
     * Search an return an object with the municipalities of a province as properties
     * @param {string} provincesName 
     * @returns {object | undefined}
     */
    getMunicipalitiesOf(provincesName) {
        _validateArgs(provincesName)
        const provinceFounded = _searchBy(this.getProvinces(), provincesName)
        if (provinceFounded) {
            return provinces[provinceFounded].municipality;
        } 
        return undefined;
    }

    /**
     * Return the municipals district of a municipality of a province.
     * 
     * @param {string} province 
     * @param {string} municipality 
     * @returns {string[] | undefined}
     */
    getMunicipalDistrictOf(province, municipality) {
        _validateArgs(province)
        const proFounded = this.getMunicipalitiesOf(province)
        if (proFounded) {
            const munFounded = _searchBy(Object.keys(proFounded), municipality);
            if (munFounded) {
                return proFounded[munFounded]
            }
            return undefined
        }
        return undefined;
    }


    /**
     * Get the name of the provices where the municipality belong to
     * 
     * It return an array because the name of the municipality might be in two or more provinces
     * 
     * @param {string} municipality 
     * @return {string[]}
     */
    getProvinceByMunicipality(municipality) {
        _validateArgs(municipality)
        return this.getProvinces().filter(province => {
            const sourceForSearch = Object.keys(provinces[province].municipality)
            return _searchBy(sourceForSearch, municipality);
        })
    }


    /**
     * Get an object with the province and the municipality searched for the municipal district
     * 
     * @param {string} municipalDisctric 
     * @return {{province: string, municipality: string}[]}
     */
    getProvinceByMunicipalDistrict(municipalDisctric) {
        _validateArgs(municipalDisctric)
        return this.getProvinces().map(province => {
            const _mun = provinces[province].municipality;
            const _munKeys = Object.keys(_mun)
            const founded = _munKeys.filter(k => {
                return _searchBy(_mun[k], municipalDisctric)
            })
            return founded.length ? {
                province: province, municipality: founded[0]
            }: false;
        }).filter(v => v)
    }

    /**
     * Get the macro-regions of the country
     * @returns { string[] }
     */
    getRegions() {
        return Object.keys(regions).map(k => regions[k].name)
    }

    /**
     * Get an object with each region with their respective zones
     * @returns { { [region]: string[] }[] }
     */
    getRegionsAndZones() {
        return Object.keys(regions).map(k => {
            const zones = 
                Object
                .keys(regions[k])
                .map(_k => regions[k][_k].name)
                .filter(v => v);
            return { [k] : zones }
        })
    }

    /**
     * Get the provinces which belong to a region
     * 
     * @param {string} region 
     * @returns {string[]}
     */
    getProvincesByRegion(region) {
        _validateArgs(region)
        return this.getProvinces().filter(p => {
            return provinces[p].region.name.toLowerCase() === region.toLowerCase()
        })
    }

    /**
     * Get the provinces which belong to a zone
     * 
     * @param {string} zone 
     * @returns {string[]}
     */
    getProvincesByZone(zone) {
        _validateArgs(zone)
        return this.getProvinces().filter(p => {
            return provinces[p].region.zone.toLowerCase() === zone.toLowerCase()
        })
    }
}

addConstant(Geo.prototype, "numberOfProvinces", 31);
addConstant(Geo.prototype, "numberOfMunicipalities", 158);
addConstant(Geo.prototype, "numberOfMunicipalDistrict", 231);

module.exports = new Geo;