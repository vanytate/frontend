import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { IRealty } from '../../shared/realty.model';
import { Realty } from '../../shared/realty.modelImpl';
import { RealtyService } from '../../shared/realty.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'add-form',
  templateUrl: './addRealty.component.html',
  styleUrls: ['./showEditAdd.component.css']
})
export class AddRealtyComponent implements OnInit {

    complexForm: FormGroup;

    realty: IRealty;

    editable: boolean = true;

    action: any;
    actionText: string;

    constructor(private realtyService: RealtyService, private route: ActivatedRoute, fb: FormBuilder) {
      this.realty = new Realty();
      this.complexForm = new FormGroup({
        city: new FormControl()
      });
      // this.complexForm = fb.group({
      //     city: [Validators.required],
      //     'street': '',
      //     'address_district': '',
      //     'address_house': '',
      //     'address_flat': '',
      //     'address_guide': '',
      //     'floor_current': '',
      //     'house_type': '',
      //     'rooms_quantity': '',
      //     'rooms_type': '',
      //     'area_all': '',
      //     'area_rooms': '',
      //     'area_kitchen': '',
      //     'ceiling_height': '',
      //     'layout': '',
      //     'repair': '',
      //     'convenience': '',
      //     'heating': '',
      //     'flooring': '',
      //     'walls': '',
      //     'ceiling': '',
      //     'windows': '',
      //     'plumbing': '',
      //     'bathroom': '',
      //     'hot_water': '',
      //     'price': '',
      //     'min_price': '',
      //     'sale': '',
      //     'furniture': ''
      //   });
    }

    ngOnInit(): void {
        this.route.url.subscribe(values => {
          this.action = this.updateRealty;
          if (values[0].path === 'edit') {
            console.log('update');
            this.actionText = 'Змінити';
            this.route.params.subscribe(params => {
              this.realtyService.getById(+params['idRealty']).subscribe(res => this.realty = res);
            });
          } else if (values[0].path === 'add'){
            console.log('save');
            this.action = this.saveRealty;
            this.actionText = 'Додати кваритру';
          } else {

          }
        });
    }

    saveRealty(event) {
      this.realtyService.saveRealty(this.realty).subscribe(res => this.realty = new Realty());
    }

    updateRealty(event) {
      this.realtyService.updateRealty(this.realty).subscribe(res => console.log(res));
    }

    deleteRealty(event) {
      this.realtyService.deleteRealty(this.realty).subscribe(res => console.log(res));
    }

    change() {
      this.editable = !this.editable;
    }

}
