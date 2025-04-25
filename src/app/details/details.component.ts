import { Component } from '@angular/core';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatCard, MatCardImage} from '@angular/material/card';
import {MatAnchor} from '@angular/material/button';

@Component({
  selector: 'app-details',
  imports: [
    NgIf,
    MatCard,
    MatCardImage,
    NgOptimizedImage,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  public movie: MovieModel | null = null;

  constructor(private route: ActivatedRoute) {

    route.params.subscribe(params => {
      MovieService.getMovieById(params['id'])
        .then(rsp => {
          this.movie = rsp.data;
        });
    });

  }

}
