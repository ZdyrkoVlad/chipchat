import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './content/order/order-list/order-list.component';
import { OrderDetailComponent } from './content/order/order-detail/order-detail.component';
import { NewOrderComponent } from './content/order/new-order/new-order.component';
import { AccountComponent } from './content/account/account.component';
import { SupportComponent } from './content/support/support.component';
import { ErrorPageComponent } from './common/error-page/error-page.component';
import { LoginComponent } from './common/login/login.component';
import { PaymentsComponent } from './content/payment/payments/payments.component';
import { ChatListComponent } from './content/chat/chat-list/chat-list.component';
import { PaymentDetailComponent } from './content/payment/payment-detail/payment-detail.component';
import { ChatComponent } from './content/chat/chat/chat.component';
import { ChatDetailComponent } from './content/chat/chat-detail/chat-detail.component';

const routes: Routes = [

  {
    path: 'order', component: OrderDetailComponent
  },
  {
    path: 'new-order', component: NewOrderComponent
  },
  {
    path: 'account', component: AccountComponent,
  },
  {
    path: 'support', component: SupportComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'chat-list', component: ChatListComponent
  },
  {
    path: 'chat', component: ChatDetailComponent
  },
  {
    path: 'invoice', component: PaymentDetailComponent
  },
  {
    path: 'payment', component: PaymentsComponent
  },
  {
    path: 'order-list',
    component: OrderListComponent
  },
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: '**', component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
