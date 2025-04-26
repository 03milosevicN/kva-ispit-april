import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {DetailsComponent} from './details/details.component';
import {OrderComponent} from './order/order.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "search", component: SearchComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "details/:id/order", component: OrderComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "user", component: UserComponent},
];
