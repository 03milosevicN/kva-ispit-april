import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../../services/movie.service';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-home',
  imports: [
    NgIf,
    MatCard,
    NgForOf,
    MatCardContent,
    NgOptimizedImage,
    RouterLink,
    MatCardImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public movies: MovieModel[] | null = null;

  constructor() {
    MovieService.getMovies().then(
      rsp => {
        this.movies = rsp.data;
      }
    )
  }


}
