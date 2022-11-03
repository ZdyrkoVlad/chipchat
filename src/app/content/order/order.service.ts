import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { orderList } from '../../mock-obj/order-mock';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList = [];

  constructor() { }


  getOrderList(): Observable<any> {
    return new BehaviorSubject(orderList);
  }

  getOrderById(id: string): Observable<any> {
    return new BehaviorSubject(orderList.filter(order => order.id === id).pop());
  }
}
