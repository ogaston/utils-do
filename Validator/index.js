class Validator {
    /**
     * Validate if the value inserted is a valid dominican id.
     *
     * @param {string | number} id
     */
    isAnIde(id) {
        const numericId = ("" + id).match(/\d+/gi).join("");
        return numericId.length === 11;
    }

    /**
     * Return the value formatted as a dominican id.
     *
     * @param {string | number} id
     */
    formatToIde(id) {
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

module.exports = new Validator;