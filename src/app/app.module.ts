import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderListComponent } from './content/order/order-list/order-list.component';
import { NewOrderComponent } from './content/order/new-order/new-order.component';
import { OrderDetailComponent } from './content/order/order-detail/order-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { OrderListItemComponent } from './content/order/order-list-item/order-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './common/nav/nav.component';
import { AccountComponent } from './content/account/account.component';
import { SupportComponent } from './content/support/support.component';
import { ErrorPageComponent } from './common/error-page/error-page.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './content/chat/chat/chat.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LendingComponent } from './common/lending/lending.component';
import { LoginComponent } from './common/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    NewOrderComponent,
    OrderDetailComponent,
    OrderListItemComponent,
    NavComponent,
    AccountComponent,
    SupportComponent,
    ErrorPageComponent,
    ChatComponent,
    LendingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
