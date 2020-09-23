> **Utils-DO esta actualmente en beta.** Espera más errores que una versión final.

[Read in English](https://github.com/ogaston/utils-do/blob/master/README.md)

## Documentación

🚀 Inicio [Documentaciones en curso]

Utils-DO, esta pequeña librería es un manejador y fuentes de datos relacionados con República Dominicana.

**Ahora adaptado para TypeScript**

## Instalación

```bash

$  npm i utils-do --save

```

## Geo

Esta clase se utiliza como fuente de información geográfica del país.

```javascript
const { Geo } = require("utils-do");

const result = Geo.getProvincesByZone("cibao sur");

console.log(result); // [ 'La Vega', 'Monseñor Nouel', 'Sánchez Ramírez' ]
```

> Este método recupera una matriz de las provincias ubicadas en esa zona (subregión)

### Referencia de la API

| Método                                              | Descripción                                                                                                                                                   | Devuelve                                 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `getProvinces()`                                    | Devuelve una matriz de strings con el nombre de cada provincia                                                                                                | string[]                                 |
| `getMunicipalitiesOf(provincesName)`                | Buscar una devolución de un objeto con los municipios de una provincia como propiedades                                                                       | objeto o undefined                       |
| `getMunicipalDistrictOf(provincia, municipio)`      | Devolver el distrito municipal de un municipio de una provincia                                                                                               | string[] o undefined                     |
| `getProvinceByMunicipality(municipio)`              | Obtenga el nombre de las provincias a las que pertenece el municipio. Devuelve una matriz porque el nombre del municipio podría estar en dos o más provincias | string[]                                 |
| `getProvinceByMunicipalDistrict(municipalDisctric)` | Obtenga un objeto con la provincia y el municipio buscado por el distrito municipal                                                                           | {provincia: string, municipio: string}[] |
| `getRegions()`                                      | Obtenga las macrorregiones del país                                                                                                                           | string[]                                 |
| `getRegionsAndZones()`                              | Obtenga un objeto con cada región con sus respectivas zonas                                                                                                   | {[región]: string[]}[]                   |
| `getProvincesByRegion(región)`                      | Obtenga las provincias que pertenecen a una región                                                                                                            | string[]                                 |
| `getProvincesByZone()`                              | Obtenga las provincias que pertenecen a una zona                                                                                                              | string[]                                 |

## Validator

Esta clase se utiliza para manejar la validación de datos genéricos como el ID (identificación del ciudadano o 'Cedula').

```javascript
const { Validator } = require("utils-do");

const result = Validator.isAnIde("4022222222");

console.log(result); // true

Validator.formatToIde(4022222222); // "402-2222222-2"
```

> Estos métodos se utilizan para manejar la identificación de los dominicanos.

### Referencia de API

| Método             | Descripción                                                           | Devuelve           |
| ------------------ | --------------------------------------------------------------------- | ------------------ |
| `isAnIde(id)`      | Validar si el valor insertado es una identificación dominicana válida | booleano           |
| `formatToIde(id)`  | Devuelve el valor formateado como una identificación dominicana.      | string o undefined |
| `isATel(tel)`      | Devolver el distrito municipal de un municipio de una provincia.      | booleano           |
| `formatToTel(tel)` | Devuelve el valor formateado como un número de teléfono dominicano.   | string o undefined |
| `isRNC(entrada)`   | Valide si es un RNC válido.                                           | booleano           |
| `formatToRNC(rnc)` | Devuelve el valor formateado como un RNC dominicano.                  | string o undefined |

## Contribuyendo

Para ayuda en crecer el repositorio, construir y probar.

Por favor, haga un nuevo issue / haga su pull-request o [enviame un correo electrónico](mailto:omar.gaston.c@gmail.com).

## Agradecimientos

Quisiéramos agradecer a cualquiera que use o contribuya con este repositorio.
