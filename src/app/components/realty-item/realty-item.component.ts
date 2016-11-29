import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IRealty } from '../../shared/realty.model';

@Component({
    selector: 'realty-item',
    templateUrl: './realty-item.component.html',
    styleUrls: ['./realty-item.component.css']
})
export class RealtyItemComponent {

    @Input('realty') realty: IRealty;

    @Output('deleted') eventOnDelete = new EventEmitter();

    deleteRealty(todo) {
        this.eventOnDelete.emit(todo);
    }

}
