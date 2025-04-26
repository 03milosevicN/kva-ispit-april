import { Component } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../../services/user.service';
import {OrderModel} from '../../models/order.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MovieModel} from '../../models/movie.model';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
  selector: 'app-user',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    NgIf,
    RouterLink,
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatButton,
    MatAnchor
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public user: UserModel | null = null;
  public displayedColumns: string[] = ['id', 'count', 'price', 'total', 'status', 'actions'];

  constructor(private router: Router) {

    if (!UserService.isActive()) {
      this.router.navigate(['/home']);
      return;
    }

    this.user = UserService.isActive();
  }

  public doPay(order: OrderModel) {
    if (UserService.changeOrderStatus('paid', order.id)) {
      this.user = UserService.isActive();
    }
  }

  public doCancel(order: OrderModel) {
    if (UserService.changeOrderStatus('canceled', order.id)) {
      this.user = UserService.isActive();
    }
  }

  public doRating(order: OrderModel, r: boolean) {
    if (UserService.changeRating(r, order.id)) {
      this.user = UserService.isActive();
    }
  }

}
