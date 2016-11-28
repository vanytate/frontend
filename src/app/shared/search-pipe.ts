import {PipeTransform, Pipe, Injectable} from "@angular/core";
import {IRealty} from "./realty.model";
import {isUndefined} from "util";

@Pipe({
  name: 'searchPipe',
  pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {

  transform(realties: IRealty[], checkForm): any {
    console.log(checkForm);
    let keys = Object.keys(checkForm);
    if (! isUndefined(checkForm['city'])) {
      return realties.filter(e => {
        if (e.city.indexOf(checkForm['city']) !== -1) {
          return e;
        }
      })
    }
/*    if (keys.length > 0) {
      return realties.filter(e => {
        keys.forEach(key => {
          if (e[key].indexOf(checkForm[key]) != -1) {
            return e;
          }
        })
      });
    }*/

    // return realties;

  }
}
