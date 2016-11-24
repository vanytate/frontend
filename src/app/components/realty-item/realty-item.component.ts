import { Component, Input } from '@angular/core';

import { IRealty } from '../../shared/realty.model';

@Component({
    selector: 'realty-item',
    templateUrl: './realty-item.component.html',
    styleUrls: ['./realty-item.component.css']
})
export class RealtyItemComponent {

    @Input('realty') realty: IRealty;

}
