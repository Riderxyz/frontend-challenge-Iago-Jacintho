import { CountriesInterface } from './../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class dataService {
  constructor(private httpClient: HttpClient) { }



  get listCountries () {
    let header = {
      headers:new HttpHeaders().set('Authorization', 'Bearer OGRmYTJkYjQtOThhZC00ZmE1LThkOTEtNDdlMjM0MjYxMzY3').set('Content-Type', 'application/json')

    }

    /* headers
    headers */
    return this.httpClient.get<CountriesInterface>('https://api.m3o.com/v1/holidays/Countries', header)
  }
}
