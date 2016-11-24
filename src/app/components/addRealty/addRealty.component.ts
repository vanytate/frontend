import {Component, OnInit} from '@angular/core';

import { IRealty } from '../../shared/realty.model';
import { Realty } from '../../shared/realty.modelImpl';
import { RealtyService } from '../../shared/realty.service';

@Component({
  templateUrl: './addRealty.component.html'
})
export class AddRealtyComponent implements OnInit {

    realty: IRealty;

    constructor(private realtyService: RealtyService) {
        this.realty = new Realty();
    }

    ngOnInit(): void {
        this.realtyService.getById(5370).subscribe(res => this.realty = res);
    }

    saveRealty(event) {
        console.log(this.realty);
    }

}
