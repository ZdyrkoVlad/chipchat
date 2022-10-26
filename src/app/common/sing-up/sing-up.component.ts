import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  @Input() error: string | null = '';

  @Output() submitEM = new EventEmitter();

  formRegistration: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.formRegistration.valid) {
      this.submitEM.emit(this.formRegistration.value);
    }
  }

}
