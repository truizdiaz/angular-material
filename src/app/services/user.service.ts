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

  getUser(index: number) {
    return this.listUser[index];
  }

  editUser(user: User, idUser: number) {
    this.listUser[idUser].userName = user.userName;
    this.listUser[idUser].firstName = user.firstName;
    this.listUser[idUser].lastName = user.lastName;
    this.listUser[idUser].sex = user.sex;

  }
}
