> **Utils-DO is currently in beta.** Expect more bugs than a final release. 

>

🚀 Get started with Lil Express [ Documentations in progress ]

## Documentation

The Utils-DO is a small library is a handler and sources of data related to Dominican Republic.

It has two main Class (yet)

## Geo

This class is used as a source of geographic information of the country.

```javascript

const { Geo } = require('utils-do');

const result = Geo.getProvincesByZone("cibao sur");

console.log(result); // [ 'La Vega', 'Monseñor Nouel', 'Sánchez Ramírez' ]

```
> This method retrieve an array of the provinces located in that zone (sub-region)


## Validator

This class is used to handle to validate generic data like the ide (Citizen identification or 'Cedula').

```javascript

const { Validator } = require('utils-do');

const result = Validator.isAnIde("4022222222");

console.log(result); // true

Validator.formatToIde(4022222222); // "402-2222222-2"

```
> These methods are used to handle the ID of the dominicans.


## Contributing

For help on growing up the repo, building, testing, and contributing.

please make your pull-request or [send me an email](mailto:omar.gaston.c@gmail.com).

## Thanks

We would like to thank to anyone who use or contribute this repo. The small project could be the greatest.
