import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-edit-user',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './create-edit-user.component.html',
  styleUrl: './create-edit-user.component.scss'
})
export class CreateEditUserComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
    })
  }

  saveUser() {
   const user: User = {
    userName: this.form.value.userName,
    firstName: this.form.value.firstName,
    lastName: this.form.value.lastName,
    sex: this.form.value.sex,
   }
    this.userService.addUser(user);

    this._snackBar.open('The user was added succesfully', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500,
    });

    this.router.navigate(['/dashboard/users'])
  }

}
