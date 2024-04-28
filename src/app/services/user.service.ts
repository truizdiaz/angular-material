import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser: User[] = [
    { userName: 'jperez', firstName: 'Juan', lastName: 'Perez', sex: 'Male' },
    { userName: 'tmartinez', firstName: 'Tomas', lastName: 'Martinez', sex: 'Male' },
    { userName: 'agarcia', firstName: 'Alejandro', lastName: 'Garcia', sex: 'Male' },
    { userName: 'jrios', firstName: 'Julieta', lastName: 'Rios', sex: 'Female' },
    { userName: 'mprandi', firstName: 'Mariana', lastName: 'Prandi', sex: 'Male' },
    { userName: 'sblanda', firstName: 'Sofia', lastName: 'Blanda', sex: 'Female' },
  ];

  constructor() { }

  getListUser(): User[] {
    return this.listUser.slice();
  }

  deleteUser(index: number) {
    this.listUser.splice(index,1)
  }

  addUser(user: User) {
    this.listUser.unshift(user);
  }
}
