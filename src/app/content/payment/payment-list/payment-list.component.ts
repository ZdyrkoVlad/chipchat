import { Component, OnInit } from '@angular/core';
import { role } from '../../../dao/role';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  roleEnum = role;
  checkoutActivate = false;

  checkoutActivateList: boolean[] = [false, false, false];

  get userRole(): role | undefined {
    return this.userService.role;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createInvoice(): void {

  }

  toggleTest(index: number): void {
    this.checkoutActivateList[index] = !this.checkoutActivateList[index];
    this.checkoutActivate = this.checkoutActivateList.find(element => element === true) ? true : false;
  }
}
