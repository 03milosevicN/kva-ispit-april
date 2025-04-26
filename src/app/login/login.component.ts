import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../../services/user.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatInput,
    FormsModule,
    MatCardActions,
    RouterLink,
    MatLabel,
    MatFormField,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private router: Router) {
    if (UserService.isActive()) {
      router.navigate(['/user']);
      return;
    }
  }


  public doLogin() {
    if (UserService.login(this.email, this.password)) {
      this.router.navigate(['/user']);
      return;
    }

    alert("Invalid email or password");
  }



}
