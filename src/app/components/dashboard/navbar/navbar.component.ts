import { Component, OnInit } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, NgForOf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  menuList: Menu[] = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.setMenu();
  }

  setMenu() {
    this.menuService.getMenu().subscribe(data => {
      this.menuList = data;
    })
  }

}
