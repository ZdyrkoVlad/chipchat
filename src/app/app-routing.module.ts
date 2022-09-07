import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './content/order/order-list/order-list.component';
import { OrderDetailComponent } from './content/order/order-detail/order-detail.component';
import { NewOrderComponent } from './content/order/new-order/new-order.component';
import { AccountComponent } from './content/account/account.component';
import { SupportComponent } from './content/support/support.component';
import { ErrorPageComponent } from './common/error-page/error-page.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  {
    path: 'order-list',
    component: OrderListComponent
  },
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
    path: '**', component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
