import { Component } from '@angular/core';
import { DefaultPageComponent } from '../../components/default-page/default-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultPageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
