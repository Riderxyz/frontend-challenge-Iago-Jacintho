export interface holidaysInterface {
  holidays: HolidayInterface[];
}

export interface HolidayInterface {
  date: string;
  name: string;
  local_name: string;
  country_code: string;
  regions: string[];
  types: string[];
}

export const newHolidayInterface = (): HolidayInterface => {
  return {
    date: '',
    name: '',
    local_name: '',
    country_code: '',
    regions: [],
    types: [],
  };
};
