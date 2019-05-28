const { provinces, regions } = require("./geo-data");
const { _searchBy, _validateArgs, addConstant } = require("../Helper/index")


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
            return { 
                region: regions[k].name,
                zones 
            }
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