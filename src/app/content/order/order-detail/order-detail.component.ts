import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenService } from '../../../service/screen.service';
import { ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderStatus } from '../../../dao/order';
import { OrderService } from '../order.service';
import { takeUntil } from 'rxjs/operators';
import { ChatService } from '../../chat/chat.service';
import { Chat } from '../../../dao/chat';
import { UserService } from '../../../service/user.service';
import { role } from '../../../dao/role';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  roleEnum = role;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  statusMaxSize = true;
  width: number = 0;

  order!: Order;
  chat!: Chat;

  get userRole(): role | undefined {
    return this.userService.role;
  }

  constructor(private screenService: ScreenService,
              private orderService: OrderService,
              private activateRoute: ActivatedRoute,
              private chatService: ChatService,
              private userService: UserService,
  ) {}

  ngOnInit(): void {
    [this.width] = this.screenService.onWindowResize();
    if (this.width <= 1024) {
      this.statusMaxSize = false;
    }

    this.orderService.getOrderById(this.activateRoute.snapshot.params['id']).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.order = data;
      this.chatService.getChatById(this.order.chatId).pipe(takeUntil(this.destroyed$)).subscribe(data => {
        this.chat = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  changeStatusSize(): void {
    this.statusMaxSize = !this.statusMaxSize;
  }

  backToStock(): void {
    this.order.orderStatus = OrderStatus.CANCELED;
    this.chat.messageList.push({
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Order ' + this.order.id + ' have been canceled!'
    });
  }
}


