import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { role } from '../../dao/role';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  roleEnum = role;

  get userRole(): role | undefined {
    return this.userService.role;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

}
