import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    lat: number = 48.2969271;
    lng: number = 25.9219931;

    constructor() {

    }

    ngOnInit() {
    }

}