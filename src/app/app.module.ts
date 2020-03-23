import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SekcijaComponent } from './components/sekcija/sekcija.component';
import { NovostiComponent } from './components/novosti/novosti.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovostComponent } from './components/novost/novost.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SekcijaComponent,
    NovostiComponent,
    FooterComponent,
    NovostComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
