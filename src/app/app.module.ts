import { ComponentModule } from './components/component.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.component';
import { HomePage } from './pages/home/home.component';
import { CdkModule } from './cdk.module';
import { PrimeNGModule } from './primeNG.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CdkModule,
    PrimeNGModule,
    AppRoutingModule,
    ComponentModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
