import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-support-dialog',
  templateUrl: './create-support-dialog.component.html',
  styleUrls: ['./create-support-dialog.component.scss']
})
export class CreateSupportDialogComponent implements OnInit {

  selected: string | undefined = undefined;

  supportForm: FormGroup = new FormGroup({
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

}
