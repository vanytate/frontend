import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IRealty } from '../shared/realty.model';
import anything = jasmine.anything;

@Injectable()
export class RealtyService {

  private getRealtiesUrl: string = 'http://lab.free-lib.com/api/realty';
  private getRealtyByIdUrl: string = 'http://lab.free-lib.com/api/realty/';
  private saveRealtyUrl: string = 'http://lab.free-lib.com/api/realty';
  private updateRealtyUrl: string = 'http://lab.free-lib.com/api/realty/';
  private deleteRealtyByIdUrl: string = 'http://lab.free-lib.com/api/realty/delete/';

    constructor(private http: Http) {

    }

    getRealties(): Observable<IRealty[]> {
        return this.http.get(this.getRealtiesUrl)
            .map(res => res.json().realty)
            .catch(this.handleError);
    }

    getById(id): Observable<IRealty> {
        return this.http.get(this.getRealtyByIdUrl + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteRealty(id): Observable<any> {
        return this.http.post(this.deleteRealtyByIdUrl + id, id)
          .map(res => res.json())
          .catch(this.handleError);
    }

    updateRealty(realty: IRealty): Observable<any> {
        return this.http.post(this.updateRealtyUrl + realty.id, realty)
          .map(res => res.json())
          .catch(this.handleError);
    }

    saveRealty(realty: IRealty): Observable<any> {
      return this.http.post(this.saveRealtyUrl, realty)
          .map(res => res.json())
          .catch(this.handleError);
    }

    handleError(error: any) {
        console.log('Помилка ', error);
        return Observable.throw(error.message || error);
    }
}
