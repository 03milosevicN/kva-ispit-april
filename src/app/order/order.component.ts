import { Component } from '@angular/core';
import {MovieModel} from '../../models/movie.model';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatCard, MatCardContent, MatCardImage} from '@angular/material/card';
import {UtilsService} from '../../services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material/select';
import {UserService} from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-order',
  imports: [
    NgIf,
    MatCard,
    MatCardImage,
    MatFormFieldModule,
    MatCardContent,
    MatInput,
    MatButton,
    FormsModule,
    MatSelect,
    MatOption,
    NgOptimizedImage
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  providers: [UtilsService]
})
export class OrderComponent {

  public movie: MovieModel | null = null;
  public selectedPrice: number = 800;
  public selectedTicketCount: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, public utils: UtilsService) {
    route.params.subscribe(params => {
      MovieService.getMovieById(params['id'])
        .then(rsp => {
          this.movie = rsp.data;
        });
    });
  }

  public doOrder() {
    const confirmed = window.confirm(`Place an order to ${this.movie?.title}?\nOrders can be cancelled from your profile.`);

    if (confirmed) {
      const result = UserService.createOrder({
        id: new Date().getTime(),
        movieId: this.movie?.movieId,
        count: this.selectedTicketCount,
        pricePerItem: this.selectedPrice,
        status: 'ordered',
        rating: null
      });

      if (result) {
        this.router.navigate(['/user']);
      } else {
        window.alert("Failed to create order");
      }
    }
  }

}
