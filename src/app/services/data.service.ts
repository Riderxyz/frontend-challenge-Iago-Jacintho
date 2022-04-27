import { holidaysInterface } from './../models/country-detail.model';
import { CountriesInterface, Country } from './../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  HolidayInterface,
  newHolidayInterface,
} from '../models/country-detail.model';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class dataService {
  selectedCountry!: Country;

  constructor(private httpClient: HttpClient) {}

  get listCountries() {
    let header = {
      headers: new HttpHeaders()
        .set(
          'Authorization',
          'Bearer OGRmYTJkYjQtOThhZC00ZmE1LThkOTEtNDdlMjM0MjYxMzY3'
        )
        .set('Content-Type', 'application/json'),
    };

    return this.httpClient.get<CountriesInterface>(
      'https://api.m3o.com/v1/holidays/Countries',
      header
    );
  }

getCountryFlag(code: string) {
  return 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' +code +'.svg'
}
  getCountryFlagBackground(code: string) {
    return {
      backgroundImage:
        'url(https://purecatamphetamine.github.io/country-flag-icons/3x2/' +
        code +
        '.svg)',
    };
  }

  getCountryHolidayList(/* countryCode: string */) {
    console.log('Carga de holidays', this.selectedCountry);
    let header = {
      headers: new HttpHeaders()
        .append(
          'Authorization',
          'Bearer OGRmYTJkYjQtOThhZC00ZmE1LThkOTEtNDdlMjM0MjYxMzY3'
        )
        .append('Content-Type', 'application/json'),
    };

    return this.httpClient.post<holidaysInterface>(
      'https://api.m3o.com/v1/holidays/List',
      {
        "country_code": this.selectedCountry.code,
        "year": moment().format('YYYY'),

      },
      header
    );
  }
}
