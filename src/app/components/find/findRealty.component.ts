import { Component, OnInit } from '@angular/core';

import { IRealty } from '../../shared/realty.model';
import { RealtyService } from '../../shared/realty.service';

@Component({
  templateUrl: './findRealty.component.html',
  styleUrls: ['./findRealty.component.css']
})
export class FindRealtyComponent implements OnInit {

    realties: IRealty[];

    filterModel;

    pageSize: number;

    constructor(private realtyService: RealtyService) {
        this.filterModel = {};
        this.realties = [];
        this.pageSize = 10;
    }

    ngOnInit() {
      this.realtyService.getRealties().subscribe(r => this.realties = r);
    }

    public showData(event) {
    }

    pageChanged(event) {
        window.scrollTo(0, 0);
    }

    filtersReset() {
      this.realties.filter(e => e);
      this.filterModel = {};
    }

}
