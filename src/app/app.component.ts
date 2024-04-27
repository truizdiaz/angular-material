import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularMaterial';
}
