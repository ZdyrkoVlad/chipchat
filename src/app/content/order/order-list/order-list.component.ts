import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { role } from '../../../dao/role';
import { OrderService } from '../order.service';
import { Order } from '../../../dao/order';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {
  roleEnum = role;

  orderList: Order[] = [];

  get userRole(): role | undefined {
    return this.userService.role;
  }

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private userService: UserService, private orderService: OrderService) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.orderService.getOrderList().pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.orderList = data;
    });
  }

}
