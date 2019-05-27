> **Utils-DO esta actualmente en beta.** Espera más errores que una versión final. 

[Read in English](https://github.com/ogaston/utils-do/blob/master/README.md)

## Documentación

🚀 Inicio [Documentaciones en curso]

Utils-DO, esta pequeña librería es un manejador y fuentes de datos relacionados con República Dominicana.

Tiene dos clases principales (aún)

## Geo

Esta clase se utiliza como fuente de información geográfica del país.

```javascript

const { Geo } = require('utils-do');

const result = Geo.getProvincesByZone("cibao sur");

console.log(result); // [ 'La Vega', 'Monseñor Nouel', 'Sánchez Ramírez' ]

```
> Este método recupera una matriz de las provincias ubicadas en esa zona (subregión)


## Validator

Esta clase se utiliza para manejar la validación de datos genéricos como el ID (identificación del ciudadano o 'Cedula').

```javascript

const { Validator } = require('utils-do');

const result = Validator.isAnIde("4022222222");

console.log(result); // true

Validator.formatToIde(4022222222); // "402-2222222-2"

```
> Estos métodos se utilizan para manejar la identificación de los dominicanos.


## Contribuyendo


Para ayuda en crecer el repositorio, construir y probar.

Por favor, haga un nuevo issue / haga su pull-request o [enviame un correo electrónico](mailto:omar.gaston.c@gmail.com).

## Agradecimientos

Quisiéramos agradecer a cualquiera que use o contribuya con este repositorio. 