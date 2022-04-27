import { Country } from './../../models/country.model';
import { dataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CountriesInterface } from 'src/app/models/country.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit {
  cardCountryArr: Country[] = [];
  showDetails = false;
  selectedContry!: Country;
  constructor(public dataSrv: dataService, private route: Router) {}

  ngOnInit(): void {
    this.dataSrv.listCountries.subscribe((res) => {
      console.log(res);

      this.cardCountryArr = res.countries;
    });
  }



  openModal(ev: Country) {
    this.dataSrv.selectedCountry = ev;
    this.route.navigateByUrl('country-holiday')
  }
}
