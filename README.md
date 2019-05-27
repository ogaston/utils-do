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

For help on growing up the repo, building and testing.

Please make your open a new issue / make your pull-request or [send me an email](mailto:omar.gaston.c@gmail.com).

## Thanks

We would like to thank to anyone who use or contribute this repo.
