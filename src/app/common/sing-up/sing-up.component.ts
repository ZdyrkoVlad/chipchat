import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  @Input() error: string | null = '';

  @Output() submitEM = new EventEmitter();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  formRegistration: FormGroup = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    matchingPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.formRegistration.valid) {
      this.submitEM.emit(this.formRegistration.value);
    }
  }

  onSubmit(): void {
    if (this.formRegistration.valid) {

      const userData = {
        displayName: this.formRegistration.value.displayName,
        email: this.formRegistration.value.email,
        password: this.formRegistration.value.password,
        matchingPassword: this.formRegistration.value.matchingPassword,
        role: 'ROLE_DEALER'
      };

      this.authService.register(userData).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }

  }

}
