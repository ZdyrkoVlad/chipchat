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
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LendingComponent } from './common/lending/lending.component';
import { LoginComponent } from './common/login/login.component';
import { ChatListComponent } from './content/chat/chat-list/chat-list.component';
import { ChatListItemComponent } from './content/chat/chat-list-item/chat-list-item.component';
import { PaymentsComponent } from './content/payment/payments/payments.component';
import { ScreenService } from './service/screen.service';
import { PaymentListComponent } from './content/payment/payment-list/payment-list.component';
import { PaymentListItemComponent } from './content/payment/payment-list-item/payment-list-item.component';
import { PaymentDetailComponent } from './content/payment/payment-detail/payment-detail.component';
import { PaymentModuleComponent } from './content/payment/payment-module/payment-module.component';
import { ChatDetailComponent } from './content/chat/chat-detail/chat-detail.component';
import { AttachFileDialogComponent } from './common/attach-file-dialog/attach-file-dialog.component';
import { UserRoleComponent } from './common/user-role/user-role.component';
import { UserService } from './service/user.service';
import { SearchComponent } from './common/search/search.component';
import { SingUpComponent } from './common/sing-up/sing-up.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatTreeModule } from '@angular/material/tree';
import { AccountListItemComponent } from './content/account/account-list-item/account-list-item.component';
import { SupportListItemComponent } from './content/support/support-list-item/support-list-item.component';
import { SupportDetailComponent } from './content/support/support-detail/support-detail.component';
import { CreateSupportDialogComponent } from './content/support/create-support-dialog/create-support-dialog.component';
import { TestComponent } from './common/test/test.component';
import { UploadFileComponent } from './common/upload-file/upload-file.component';

import { InvoiceListComponent } from './content/invoice/invoice-list/invoice-list.component';
import { InvoiceListItemComponent } from './content/invoice/invoice-list-item/invoice-list-item.component';
import { InvoiceDetailComponent } from './content/invoice/invoice-detail/invoice-detail.component';

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
    LoginComponent,
    ChatListComponent,
    ChatListItemComponent,
    PaymentsComponent,
    PaymentListComponent,
    PaymentListItemComponent,
    PaymentDetailComponent,
    PaymentModuleComponent,
    ChatDetailComponent,
    AttachFileDialogComponent,
    UserRoleComponent,
    SearchComponent,
    SingUpComponent,
    AccountListItemComponent,
    SupportListItemComponent,
    SupportDetailComponent,
    CreateSupportDialogComponent,
    TestComponent,
    UploadFileComponent,
    InvoiceListComponent,
    InvoiceListItemComponent,
    InvoiceDetailComponent,
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
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,

  ],
  providers: [ScreenService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
