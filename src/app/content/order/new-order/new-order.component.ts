import { Component, OnInit } from '@angular/core';
import { FuelType, OrderData } from '../../../dao/order';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

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

  filesList: any[] = [];

  orderForm: FormGroup = new FormGroup({
    mark: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    generation: new FormControl('', [Validators.required]),
    series: new FormControl('', [Validators.required]),
    modification: new FormControl('', [Validators.required]),
    yearOfManufacture: new FormControl('', [Validators.required]),
    fuelType: new FormControl('', [Validators.required]),
    tuningType: new FormControl('', [Validators.required]),
    VIN: new FormControl('', [Validators.required]),
    additionalInfo: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    file: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {

  }

  attachFile(event: any): void {
    this.filesList = event;
  }

  onSubmit(): void {

  }

}
