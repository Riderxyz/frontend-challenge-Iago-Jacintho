import { PrimeNGModule } from './../primeNG.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, PrimeNGModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class ComponentModule {}
