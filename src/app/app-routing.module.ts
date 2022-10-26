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
import { ChatDetailComponent } from './content/chat/chat-detail/chat-detail.component';
import { UserRoleComponent } from './common/user-role/user-role.component';
import { SingUpComponent } from './common/sing-up/sing-up.component';
import { SupportDetailComponent } from './content/support/support-detail/support-detail.component';
import { TestComponent } from './common/test/test.component';
import { InvoiceListComponent } from './content/invoice/invoice-list/invoice-list.component';

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
    path: 'support-detail', component: SupportDetailComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sing-up', component: SingUpComponent
  },
  {
    path: 'chat-list', component: ChatListComponent
  },
  {
    path: 'chat/:id', component: ChatDetailComponent
  },
  {
    path: 'invoices', component: InvoiceListComponent
  },
  {
    path: 'payments', component: PaymentsComponent
  },
  {
    path: 'order-list',
    component: OrderListComponent
  },
  {
    path: 'user-role',
    component: UserRoleComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: '**', component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
