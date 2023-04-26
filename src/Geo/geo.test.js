const Geo = require("./index");

describe("Provinces methods test", () => {
  test("getProvinces: Should return an array with the provinces", () => {
    const provinces = Geo.getProvinces();
    expect(provinces instanceof Array).toBeTruthy();
    expect(provinces.length).not.toBe(0);
    expect(provinces).toHaveLength(Geo.numberOfProvinces);
  });

  test("getMunicipalitiesOf: Should return an object with the municipalities", () => {
    const municipalities = Geo.getMunicipalitiesOf("la romana");
    expect(municipalities.hasOwnProperty("Villa Hermosa")).toBeTruthy();
    expect(municipalities["La Romana"]).toEqual(
      expect.arrayContaining(["Caleta"])
    );

    const samanaMunicipalities = Geo.getMunicipalitiesOf("samana");
    expect(samanaMunicipalities.hasOwnProperty("Samaná")).toBeTruthy();
  });

  test("getMunicipalDistrictOf: Should return an array with the municipals disctric", () => {
    const munDisctrict = Geo.getMunicipalDistrictOf(
      "la altagracia",
      "San Rafael del Yuma"
    );
    expect(munDisctrict instanceof Array).toBeTruthy();
    expect(munDisctrict).toEqual(expect.arrayContaining(["Bayahibe"]));
  });

  test("getProvinceByMunicipalDistrict: Should return an array with an object with the provinces and its municipalities", () => {
    const provinces = Geo.getProvinceByMunicipalDistrict("cabarete");
    expect(provinces instanceof Array).toBeTruthy();
    expect(provinces[0].province).toBe("Puerto Plata");
    expect(provinces[0].municipality).toBe("Sosúa");
  });

  test("getProvinceByMunicipality: Should return an array with the provinces", () => {
    const provinces = Geo.getProvinceByMunicipality("sanchez");
    expect(provinces instanceof Array).toBeTruthy();
    expect(provinces).toEqual(expect.arrayContaining(["Samaná"]));
  });
});

describe("Regions methods test", () => {
  test("getRegions: Should return an array with the provinces of a region", () => {
    const regions = Geo.getRegions();
    expect(regions instanceof Array).toBeTruthy();
    expect(regions).toEqual(expect.arrayContaining(["Cibao", "Este", "Sur"]));
  });

  test("getRegionsAndZones: Should return an array with the provinces of a region", () => {
    const regions = Geo.getRegionsAndZones();
    expect(regions instanceof Array).toBeTruthy();
    expect(regions).toHaveLength(3);
    expect(regions.some((v) => v.region === "Este")).toBeTruthy();
  });

  test("getProvincesByRegion: Should return an array with the provinces of a region", () => {
    const provinces = Geo.getProvincesByRegion("este");
    expect(provinces instanceof Array).toBeTruthy();
    expect(provinces).toEqual(
      expect.arrayContaining([
        "La Romana",
        "La Altagracia",
        "San Pedro de Macorís",
      ])
    );
  });

  test("getProvincesByZone: Should return an array with the provinces of a region", () => {
    const provinces = Geo.getProvincesByZone("cibao sur");
    expect(provinces instanceof Array).toBeTruthy();
    expect(provinces).toEqual(
      expect.arrayContaining(["La Vega", "Monseñor Nouel"])
    );
  });
});
