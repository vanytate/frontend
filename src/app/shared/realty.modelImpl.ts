import {IRealty} from "./realty.model";

export class Realty implements IRealty {

  id: number = null;
  city: any = null;
  street: any = null;
  address_district: any = null;
  address_house: any = null;
  address_flat: number = null;
  address_guide: any = null;
  floor_current: number = null;
  house_type: string = null;
  rooms_quantity: number = null;
  rooms_type: string;
  area_all: number = null;
  area_rooms: number = null;
  area_kitchen: any = null;
  ceiling_height: any = null;
  layout: string = 'не вказано';
  repair: string = 'не вказано';
  convenience: string = 'не вказано';
  heating: string = 'не вказано';
  flooring: string = 'не вказано';
  walls: string = 'не вказано';
  ceiling: string = 'не вказано';
  windows: string = 'не вказано';
  plumbing: string = 'не вказано';
  bathroom: string = 'не вказано';
  hot_water: string = 'не вказано';
  price: any = null;
  min_price: any = null;
  sale: string = 'не вказано';
  furniture: string = 'без меблів';
}
