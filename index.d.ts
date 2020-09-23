type MunicipalDisctric = string;
type Municipality = Record<string, MunicipalDisctric[]>;
type ProvinceSearchResult = { province: Province; municipality: string };
type RegionSeachResult = Record<Region, string[]>;

interface UtilsDO {
  Geo: Geo;
  Validator: Validator;
}

declare const UtilsDo: UtilsDO;

export const Geo: Geo;
export const Validator: Validator;

export default UtilsDo;

class Geo {
  public readonly numberOfProvinces: number;
  public readonly numberOfMunicipalities: number;
  public readonly numberOfMunicipalDistrict: number;

  getProvinces(): Province[];
  getMunicipalitiesOf(provincesName: Province): Municipality | undefined;
  getMunicipalDistrictOf(
    province: Province,
    municipality: string
  ): MunicipalDisctric[] | undefined;
  getProvinceByMunicipality(municipality: string): Province | undefined;
  getProvinceByMunicipalDistrict(
    municipalDisctric: string
  ): ProvinceSearchResult[] | undefined;
  getRegions(): string;
  getRegionsAndZones(): RegionSeachResult[];
  getProvincesByRegion(region: string): string | undefined;
  getProvincesByZone(zone: string): string | undefined;
}

class Validator {
  setStrictValidation(value: boolean): void;

  isAnIde(id: string | number): boolean;
  formatToIde(id: string | number): string;

  isATel(tel: string | number): boolean;
  formatToTel(tel: string | number): string;

  isRNC(input: string | number): boolean;
  formatToRNC(rnc: string | number): string;
}

type Region = "Cibao" | "Sur" | "Este";

type Province =
  | "Azua"
  | "Bahoruco"
  | "Barahona"
  | "Dajabón"
  | "Duarte"
  | "El Seibo"
  | "Elías Piña"
  | "Espaillat"
  | "Hato Mayor"
  | "Hermanas Mirabal"
  | "Independencia"
  | "La Altagracia"
  | "La Romana"
  | "La Vega"
  | "María Trinidad Sánchez"
  | "Monseñor Nouel"
  | "Montecristi"
  | "Monte Plata"
  | "Pedernales"
  | "Peravia"
  | "Puerto Plata"
  | "Samamá"
  | "San Cristóbal";
