import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import {Ng2PaginationModule} from 'ng2-pagination';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

import { Navigator } from './components/header/nav.component';
import { AddRealtyComponent } from './components/addRealty/addRealty.component';
import { FindRealtyComponent } from './components/find/findRealty.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RealtyItemComponent } from './components/realty-item/realty-item.component';

import { RealtyService } from './shared/realty.service';
import {SearchPipe} from "./shared/search-pipe";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddRealtyComponent },
  { path: 'edit/:idRealty', component: AddRealtyComponent },
  { path: 'find', component: FindRealtyComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent, Navigator, HomeComponent, AddRealtyComponent, FindRealtyComponent, ContactsComponent, RealtyItemComponent, SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaQVRMQWK77TWdzl320yL4r8nS9ND4lJg'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RealtyService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
