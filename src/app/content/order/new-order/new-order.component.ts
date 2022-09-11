import { Component, OnInit } from '@angular/core';
import { FuelType } from '../../../dao/order';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-new-order-detail',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  selectedValue = '';
  fuelType: { value: FuelType, viewValue: string }[] = [
    { value: FuelType.AI95, viewValue: '95' },
    { value: FuelType.AI98, viewValue: '98' },
    { value: FuelType.AI100, viewValue: '100' },
    { value: FuelType.DIESEL, viewValue: 'Diesel' },
  ];
  yearManufature: any[] = [
    { value: 1980, viewValue: '1980' },
    { value: 1981, viewValue: '1981' },
  ];
  tuningType: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
