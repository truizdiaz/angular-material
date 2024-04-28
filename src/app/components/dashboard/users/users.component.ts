import { Component } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { User } from '../../../interfaces/user';

const listUser: User[] = [
  { userName: 'jperez', firstName: 'Juan', lastName: 'Perez', sex: 'Male' },
  { userName: 'tmartinez', firstName: 'Tomas', lastName: 'Martinez', sex: 'Male' },
  { userName: 'agarcia', firstName: 'Alejandro', lastName: 'Garcia', sex: 'Male' },
  { userName: 'jrios', firstName: 'Julieta', lastName: 'Rios', sex: 'Female' },
  { userName: 'mprandi', firstName: 'Mariana', lastName: 'Prandi', sex: 'Male' },
  { userName: 'sblanda', firstName: 'Sofia', lastName: 'Blanda', sex: 'Female' },
];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatIconModule, MatTooltipModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'sex', 'accions'];
  dataSource = listUser;

}
