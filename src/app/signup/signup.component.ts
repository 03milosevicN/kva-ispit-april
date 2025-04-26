import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router, RouterLink} from '@angular/router';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatInput, MatLabel, MatFormField} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
  selector: 'app-signup',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
    MatCardActions,
    MatButton,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public email: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public password: string = "";
  public repeatPassword: string = "";
  public phone: string = "";

  constructor(private router: Router) {}

  public doSignup() {

    if (this.email == "" || this.password == "") {
      alert("Email and password are required fields!");
      return;
    }

    if (this.password !== this.repeatPassword) {
      alert("Password fields aren't matching!");
      return;
    }

    const result = UserService.createUser({
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      orders: []
    });

    result ? this.router.navigate(['/login']) : alert("Email is already in use!");
  }

}
