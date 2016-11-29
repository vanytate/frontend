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
      return realties.filter(e => {
        if (!(isUndefined(checkForm['city'])) && checkForm['city'] !== '' && e.city.indexOf(checkForm['city']) === -1) {
          return false;
        }
        if (!(isUndefined(checkForm['street'])) && checkForm['street'] !== '' && e.street.indexOf(checkForm['street']) === -1) {
          return false;
        }
        if (!(isUndefined(checkForm['address_district'])) && checkForm['address_district'] !== '' && checkForm['address_district'] !== '' && e.address_district.indexOf(checkForm['address_district']) === -1) {
          return false;
        }
        if (!(isUndefined(checkForm['address_house'])) && checkForm['address_house'] !== '' && e.address_house.indexOf(checkForm['address_house']) === -1) {
          return false;
        }
        if (!(isUndefined(checkForm['address_flat'])) && checkForm['address_flat'] !== '' && e.address_flat !== (checkForm['address_flat'])) {
          return false;
        }
        if (!(isUndefined(checkForm['floor_current'])) && checkForm['floor_current'] !== '' && e.floor_current !== (checkForm['floor_current'])) {
          return false;
        }
        if (!(isUndefined(checkForm['house_type'])) && checkForm['house_type'] !== '' && e.house_type !== checkForm['house_type']) {
          return false;
        }
        if (!(isUndefined(checkForm['rooms_quantity'])) && checkForm['rooms_quantity'] !== '' && e.rooms_quantity !== (checkForm['rooms_quantity'])) {
          return false;
        }
        if (!(isUndefined(checkForm['rooms_type'])) && checkForm['rooms_type'] !== '' && checkForm['rooms_type'] !== '' && e.rooms_type !== checkForm['rooms_type']) {
          return false;
        }
        if (!(isUndefined(checkForm['area_all'])) && checkForm['area_all'] !== '' && e.area_all !== (checkForm['area_all'])) {
          return false;
        }
        if (!(isUndefined(checkForm['area_rooms'])) && checkForm['area_rooms'] !== '' && e.area_rooms !== (checkForm['area_rooms'])) {
          return false;
        }
        if (!(isUndefined(checkForm['area_kitchen'])) && checkForm['area_kitchen'] !== '' && e.area_kitchen !== (checkForm['area_kitchen'])) {
          return false;
        }
        if (!(isUndefined(checkForm['ceiling_height'])) && checkForm['ceiling_height'] !== '' && e.ceiling_height !== (checkForm['ceiling_height'])) {
          return false;
        }
        if (!(isUndefined(checkForm['layout'])) && checkForm['layout'] !== '' && checkForm['layout'] !== '' && e.layout !==checkForm['layout']) {
          return false;
        }
        if (!(isUndefined(checkForm['repair'])) && checkForm['repair'] !== '' && checkForm['repair'] !== '' && e.repair !== checkForm['repair']) {
          return false;
        }
        if (!(isUndefined(checkForm['convenience'])) && checkForm['convenience'] !== '' && checkForm['convenience'] !== '' && e.convenience !== checkForm['convenience']) {
          return false;
        }
        if (!(isUndefined(checkForm['heating'])) && checkForm['heating'] !== '' && checkForm['heating'] !== '' && e.heating !== checkForm['heating']) {
          return false;
        }
        if (!(isUndefined(checkForm['flooring'])) && checkForm['flooring'] !== '' && checkForm['flooring'] !== '' && e.flooring !== checkForm['flooring']) {
          return false;
        }
        if (!(isUndefined(checkForm['walls'])) && checkForm['walls'] !== '' && checkForm['walls'] !== '' && e.walls !== checkForm['walls']) {
          return false;
        }
        if (!(isUndefined(checkForm['ceiling'])) && checkForm['ceiling'] !== '' && checkForm['ceiling'] !== '' && e.ceiling !== checkForm['ceiling']) {
          return false;
        }
        if (!(isUndefined(checkForm['windows'])) && checkForm['windows'] !== '' && checkForm['windows'] !== '' && e.windows !== checkForm['windows']) {
          return false;
        }
        if (!(isUndefined(checkForm['plumbing'])) && checkForm['plumbing'] !== '' && checkForm['plumbing'] !== '' && e.plumbing !== checkForm['plumbing']) {
          return false;
        }
        if (!(isUndefined(checkForm['bathroom'])) && checkForm['bathroom'] !== '' && checkForm['bathroom'] !== '' && e.bathroom !== checkForm['bathroom']) {
          return false;
        }
        if (!(isUndefined(checkForm['hot_water'])) && checkForm['hot_water'] !== '' && checkForm['hot_water'] !== '' && e.hot_water !== checkForm['hot_water']) {
          return false;
        }
        if (!(isUndefined(checkForm['price'])) && checkForm['price'] !== '' && checkForm['price'] !== '' && e.price !== (checkForm['price'])) {
          return false;
        }
        if (!(isUndefined(checkForm['min_price'])) && checkForm['min_price'] !== '' && checkForm['min_price'] !== '' && e.min_price !== (checkForm['min_price'])) {
          return false;
        }
        if (!(isUndefined(checkForm['sale'])) && checkForm['sale'] !== '' && checkForm['sale'] !== '' && e.sale.indexOf(checkForm['sale']) === -1) {
          return false;
        }
        if (!(isUndefined(checkForm['furniture'])) && checkForm['furniture'] !== '' && checkForm['furniture'] !== '' && e.furniture !== checkForm['furniture']) {
          return false;
        }
        return true;
      });
  }
}
