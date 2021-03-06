import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SekcijaComponent } from './components/sekcija/sekcija.component';
import { NovostiComponent } from './components/novosti/novosti.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovostComponent } from './components/novost/novost.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NovostDetaljiComponent } from './components/novost-detalji/novost-detalji.component';
import { ProvaComponent } from './components/prova/prova.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminTopbarComponent } from './components/admin-topbar/admin-topbar.component';

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
    AboutComponent,
    LoginComponent,
    NovostDetaljiComponent,
    ProvaComponent,
    DashboardComponent,
    SidebarComponent,
    AdminTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
