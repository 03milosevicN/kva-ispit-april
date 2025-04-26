import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, RouterLink, MatAnchor, NgIf, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {}

  public doLogout() {
    localStorage.removeItem('active');
    this.router.navigate(['/login']);
  }

  // if there are errors change to regular public variable equal to UserService
  protected readonly UserService = UserService;
}

