import { UserModel } from "../models/user.model";
import {OrderModel} from '../models/order.model';

export class UserService {

  static retrieveUsers(): UserModel[] {
    if (!localStorage.getItem('users')) {
      const userArr: UserModel[] = [
        {
          email: "user@example.com",
          firstName: "Example",
          lastName: "User",
          phone: "+381123456789",
          password: 'example123',
          orders: [],
        }
      ];
      localStorage.setItem('users', JSON.stringify(userArr));
    }
    return JSON.parse(localStorage.getItem('users')!);
  }


  static createUser(model: UserModel) {
    const users: UserModel[] = this.retrieveUsers();
    for (let user of users) {
      if (user.email === model.email) {
        return false;
      }
    }
    users.push(model);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }


  static login(email: string, password: string): boolean {
    for (let user of this.retrieveUsers()) {
      if (user.email === email && user.password === password) {
        localStorage.setItem('active', user.email);
        return true;
      }
    }
    return false;
  }


  static isActive(): UserModel | null {
    if (!localStorage.getItem('active')) {
      return null;
    }
    for (let user of this.retrieveUsers()) {
      if (user.email == localStorage.getItem('active')) {
        return user;
      }
    }
    return null;
  }


  static createOrder(order: OrderModel) {
    const users = this.retrieveUsers();

    for (let user of users) {
      if (user.email == localStorage.getItem('active')) {
        user.orders.push(order);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
      }
    }
    return false;
  }


  static changeOrderStatus(status: 'ordered' | 'paid' | 'canceled', id: number) {
    const active = this.isActive();
    if (active) {
      const users = this.retrieveUsers();
      for (let user of users) {
        if (user.email == active.email) {
          for (let order of user.orders) {
            if (order.id == id) {
              order.status = status;
            }
          }
          localStorage.setItem('users', JSON.stringify(users));
          return true;
        }
      }
    }
    return false;
  }


  static changeRating(r: boolean, id: number) {
    const active = this.isActive()
    if (active) {
      const arr = this.retrieveUsers();
      for (let user of arr) {
        if (user.email == active.email) {
          for (let order of user.orders) {
            if (order.id == id && order.status == 'paid') {
              order.rating = r;
            }
          }
          localStorage.setItem('users', JSON.stringify(arr));
          return true;
        }
      }
    }
    return false;
  }


}
