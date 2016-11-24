import { Component, OnInit } from '@angular/core';

import { IRealty } from '../../shared/realty.model';
import { RealtyService } from '../../shared/realty.service';

@Component({
  templateUrl: './findRealty.component.html',
  styleUrls: ['./findRealty.component.css']
})
export class FindRealtyComponent implements OnInit {

    realties: IRealty[];

    pageSize: number;

    constructor(private realtyService: RealtyService) {
        this.realties = [];
        this.pageSize = 10;
    }

    ngOnInit() {
      this.realtyService.getRealties().subscribe(r => this.realties = r);
    }

    public showData(event) {
      console.log(this.realties);
    }

    pageChanged(event) {
        window.scrollTo(0, 0);
    }

}
