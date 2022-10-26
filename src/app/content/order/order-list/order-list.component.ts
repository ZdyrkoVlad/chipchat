import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { role } from '../../../dao/role';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  roleEnum = role;

  get userRole(): role | undefined {
    return this.userService.role;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
