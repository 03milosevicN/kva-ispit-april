import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {MovieModel} from '../../models/movie.model';
import {NgIf} from '@angular/common';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-search',
  imports: [
    NgIf,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    FormsModule,
    MatInput,
    MatCardActions,
    MatButton,
    RouterLink,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatAnchor,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  allData: MovieModel[] | null = null;
  dataSource: MovieModel[] | null = null;

  displayedColumns: string[] = ['title', 'movieGenres', 'runTime', 'director', 'movieActors', 'actions'];

  userInput: string = '';

  constructor() {
    MovieService.getMovies()
      .then(rsp => {
        this.allData = rsp.data;
        this.dataSource = rsp.data;
      })
  }

  public doFilterChain() {
    if (this.allData == null) return;

    const input = this.userInput.trim().toLowerCase();

    this.dataSource = [...this.allData.filter(obj => {
      return obj.title.toLowerCase().includes(input) ||
        obj.runTime.toString().includes(input) ||
        obj.director.name.toLowerCase().includes(input) ||
        (obj.movieGenres?.genre?.name?.toLowerCase().includes(input) ?? false) ||
        (obj.movieActors?.actor?.name?.toLowerCase().includes(input) ?? false);
    })];


  }

  public doReset() {
    this.userInput = '';
    this.dataSource = this.allData;
  }

  public getGenreNames(element: any) {
    if (element.movieGenres && Array.isArray(element.movieGenres) && element.movieGenres.length > 0) {
      return element.movieGenres.map((genre: any) => genre.genre?.name).join(', ') || 'unknown genre';
    }
    return 'unknown genre';
  }

  public getActorNames(element: any) {
    if (element.movieActors && Array.isArray(element.movieActors) && element.movieActors.length > 0) {
      return element.movieActors.slice(0, 3).map((actor: any) => actor.actor?.name).join(', ') || 'unknown actor';
    }
    return 'unknown actor';
  }



}
