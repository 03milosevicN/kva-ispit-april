import {OrderModel} from './order.model';

export interface UserModel {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  orders: OrderModel[]
}
