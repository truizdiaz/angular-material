import { AfterViewInit, Component, ViewChild } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

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
  imports: [MatToolbarModule, MatTableModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements AfterViewInit  {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'sex', 'accions'];
  dataSource = new MatTableDataSource(listUser);

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

}
