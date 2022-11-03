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
import { AccountDetailComponent } from './content/account/account-detail/account-detail.component';
import { PaymentDetailComponent } from './content/payment/payment-detail/payment-detail.component';
import { LendingComponent } from './common/lending/lending.component';
import { AuthGuard } from './guard/auth.guard';
import { InvoiceDetailComponent } from './content/invoice/invoice-detail/invoice-detail.component';

const routes: Routes = [

  {
    path: 'new-order', component: NewOrderComponent,
    data: {
      role: ['DEALER']
    },
  },
  {
    path: 'account', component: AccountDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'accounts', component: AccountComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'account/:id', component: AccountDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'support', component: SupportComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'support-detail', component: SupportDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sing-up', component: SingUpComponent
  },
  {
    path: 'chat-list', component: ChatListComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'chat/:id', component: ChatDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'invoices', component: InvoiceListComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DEVELOPER']
    },
  },
  {
    path: 'invoice/:id', component: InvoiceDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DEVELOPER']
    },
  },
  {
    path: 'payments', component: PaymentsComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEALER']
    },
  },
  {
    path: 'payment-detail', component: PaymentDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'order-list',
    component: OrderListComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },

  {
    path: 'order/:id', component: OrderDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: 'user-role',
    component: UserRoleComponent
  },
  {

    path: 'home',
    component: OrderListComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['DISTRIBUTOR', 'DEVELOPER', 'DEALER']
    },
  },
  {
    path: '',
    component: LoginComponent,
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
