import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IRealty } from '../shared/realty.model';

@Injectable()
export class RealtyService {

    getDataUrl: string = 'http://lab.free-lib.com/api/realty';
    sendDataUrl: string = 'http://lab.free-lib.com/api/realty';
    updateDataUrl: string = 'http://lab.free-lib.com/api/realty/';
    deleteDataUrl: string = 'http://lab.free-lib.com/api/realty/delete/';

    constructor(private http: Http) {

    }

    getRealties(): Observable<IRealty[]> {
        return this.http.get(this.getDataUrl)
            .map(res => res.json().realty)
            .catch(this.handleError);
    }

    getById(id): Observable<IRealty> {
        return this.http.get(this.getDataUrl + '/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.log('Помилка ', error);
        return Observable.throw(error.message || error);
    }
}
