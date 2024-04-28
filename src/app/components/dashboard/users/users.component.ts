import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

// service
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatIconModule, MatTooltipModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, NgIf, MatSnackBarModule, MatButtonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'sex', 'accions'];
  dataSource = new MatTableDataSource<User>;

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers() {
    const userList: User[] = this.userService.getListUser();
    this.dataSource = new MatTableDataSource(userList);

  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
    this.getUsers();

    this._snackBar.open('The user was deleted succesfully', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500,
    });
  }

}
