> **Utils-DO is currently in beta.** Expect more bugs than a final release. 

[Leer en Español](https://github.com/ogaston/utils-do/blob/master/README-ES.md)

## Documentation

🚀 Get started [ Documentations in progress ]

The Utils-DO, This small library is a handler and sources of data related to Dominican Republic.

It has two main Class (yet)

## Geo

This class is used as a source of geographic information of the country.

```javascript

const { Geo } = require('utils-do');

const result = Geo.getProvincesByZone("cibao sur");

console.log(result); // [ 'La Vega', 'Monseñor Nouel', 'Sánchez Ramírez' ]

```
> This method retrieve an array of the provinces located in that zone (sub-region)

### API Reference

| Method | Description | Return |
| --- | --- | --- |
| `getProvinces()` | Return an array of string with the name of each province | string[] |
| `getMunicipalitiesOf(provincesName)` | Search an return an object with the municipalities of a province as properties | object or undefined |
| `getMunicipalDistrictOf(province, municipality)` | Return the municipals district of a municipality of a province. | string[] or undefined |
| `getProvinceByMunicipality(municipality)` | Get the name of the provices where the municipality belong to. It return an array because the name of the municipality might be in two or more provinces. | string[] |
| `getProvinceByMunicipalDistrict(municipalDisctric)` | Get an object with the province and the municipality searched for the municipal district. | {province: string, municipality: string}[] |
| `getRegions()` | Get the macro-regions of the country. | string[] |
| `getRegionsAndZones()` | Get an object with each region with their respective zones. | { [region]: string[] }[] |
| `getProvincesByRegion(region)` | Get the provinces which belong to a region. | string[] |
| `getProvincesByZone()` | Get the provinces which belong to a zone. | string[] |


## Validator

This class is used to handle to validate generic data like the ide (Citizen identification or 'Cedula').

```javascript

const { Validator } = require('utils-do');

const result = Validator.isAnIde("4022222222");

console.log(result); // true

Validator.formatToIde(4022222222); // "402-2222222-2"

```
> These methods are used to handle the ID of the dominicans.

### API Reference

| Method | Description | Return |
| --- | --- | --- |
| `isAnIde(id)` | Validate if the value inserted is a valid dominican id | boolean |
| `formatToIde(id)` | Return the value formatted as a dominican id. | string or undefined |
| `isATel(tel)` | Return the municipals district of a municipality of a province. | boolean |
| `formatToTel(tel)` | Return the value formatted as a dominican tel number. | string or undefined |
| `isRNC(input)` | Validate if is a valid RNC. | boolean |
| `formatToRNC(rnc)` | Return the value formatted as a dominican RNC. | string or undefined |


## Contributing

For help on growing up the repo, building and testing.

Please make your open a new issue / make your pull-request or [send me an email](mailto:omar.gaston.c@gmail.com).

## Thanks

We would like to thank to anyone who use or contribute this repo.
