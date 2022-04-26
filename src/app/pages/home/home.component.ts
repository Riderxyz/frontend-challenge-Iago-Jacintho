import { Country } from './../../models/country.model';
import { dataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CountriesInterface } from 'src/app/models/country.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit {
  cardCountryArr: Country[] = [];
  showDetails = false;
  selectedContry!: Country;
  constructor(private dataSrv: dataService) {}

  ngOnInit(): void {
    this.dataSrv.listCountries.subscribe((res) => {
      console.log(res);

      this.cardCountryArr = res.countries;
    });
  }

  getCountryFlag(code: string) {
    return {
      backgroundImage:
        'url(https://purecatamphetamine.github.io/country-flag-icons/3x2/' +
        code +
        '.svg)',
    };
  }

  openModal(ev: Country) {
    this.selectedContry = ev;
    this.showDetails = !this.showDetails;
  }
}
