import { CountryModalComponent } from './country-modal/country-modal.component';
import { PrimeNGModule } from './../primeNG.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, PrimeNGModule],
  exports: [HeaderComponent, CountryModalComponent],
  declarations: [HeaderComponent, CountryModalComponent],
  providers: [],
})
export class ComponentModule {}
