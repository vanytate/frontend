import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import {Ng2PaginationModule} from 'ng2-pagination';

import { AppComponent } from './app.component';

import { Navigator } from './components/header/nav.component';
import { AddRealtyComponent } from './components/addRealty/addRealty.component';
import { FindRealtyComponent } from './components/find/findRealty.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RealtyItemComponent } from './components/realty-item/realty-item.component';

import { RealtyService } from './shared/realty.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddRealtyComponent },
  { path: 'find', component: FindRealtyComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent, Navigator, HomeComponent, AddRealtyComponent, FindRealtyComponent, ContactsComponent, RealtyItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RealtyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
