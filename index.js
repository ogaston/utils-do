const provinces = require("./provinces");

class Validator {
  /**
   * Valida si el valor insertado corresponde a una cedula valida.
   *
   * @param {string | number} id
   */
  static isAnIde(id) {
    const numericId = ("" + id).match(/\d+/gi).join("");
    return numericId.length === 11;
  }

  /**
   * Da formato de cedula al valor insertado
   *
   * @param {string | number} id
   */
  static formatToIde(id) {
    if (typeof id !== "string" && typeof id !== "number") {
      throw new Error(
        "Debe ingresar el valor que sera formateado - formatToIde(string | number)"
      );
    }
    const regex = /\(?(\d{3})\)?[- ]?(\d{7})[- ]?(\d{1})/g;
    const result = ("" + id).replace(regex, "$1-$2-$3");
    return result.length === 13 ? result : undefined;
  }
}

class Geo {
  static getProvinces() {
    return Object.keys(provinces);
  }

  static getMunicipalitiesOf(provincesName) {
    if (typeof provincesName !== "string") {
      return undefined;
    }

    provincesName.split(" ");

    return provinces[provincesName].municipality;
  }
}

console.log(Geo.getMunicipalitiesOf("la romana"));

/***
 * arr = []
let com = []
u.forEach((o,i) => {
    if (o.vAling === "top") {
        arr[i] = {
						title: o.firstElementChild.innerText,
						data: com
				}
		}
		comp.push({
			mun: o.firstElementChild.innerText
			dist: o.lasttElementChild.innerText
		})
})

 */
