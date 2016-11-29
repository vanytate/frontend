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

    sliderValue: number;

    constructor(private realtyService: RealtyService) {
        this.sliderValue = 5;
        this.filterModel = {};
        this.realties = [];
    }

    ngOnInit() {
      this.realtyService.getRealties().subscribe(r => this.realties = r);
    }

    pageChanged(event) {
        window.scrollTo(0, 0);
    }

    filtersReset() {
      this.realties.filter(e => e);
      this.filterModel = {};
    }

    onRealtyDelete(realtyForDelete: IRealty) {
      this.realtyService.deleteRealty(realtyForDelete).subscribe(res => {
        let index = this.realties.indexOf(realtyForDelete);
        if (index > -1) {
          this.realties.splice(index, 1);
        }
      });
    }

}
