import { Component } from '@angular/core';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,ReactiveFormsModule, MatSnackBarModule, MatProgressSpinnerModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const user: string = this.form.value.user;
    const password: string = this.form.value.password;

    if(user === 'juan' && password === 'admin123') {
      // Redirect to dahsboard
      this.fakeLoading();

    } else {
      // Show an error
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Incorrect username or password', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      // Redirect to the dashboard
    }, 2000);
  }

}
