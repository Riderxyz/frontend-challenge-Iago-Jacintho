import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HolidayInterface } from 'src/app/models/country-detail.model';
import { dataService } from 'src/app/services/data.service';

@Component({
  templateUrl: './country-holiday.component.html',
  styleUrls: ['./country-holiday.component.scss']
})
export class CountryHolidayPage implements OnInit {
  details: HolidayInterface[] = [];
  blockedPanel: boolean = false;
  constructor(public dataSrv: dataService) {}


  ngOnInit(): void {
    this.dataSrv.getCountryHolidayList().subscribe((res) => {
      console.log(res.holidays);
      this.blockedPanel = !this.blockedPanel;
      this.details = res.holidays;
    });
  }

  formatedDate(date:string){
    return moment(date).format('L')
  }

}
