import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { role } from '../../dao/role';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  roleEnum = role;

  get userRole(): role | undefined {
    return this.userService.role;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.roleEnum);
  }

  setAutRole(userRole: role): void {
    this.userService.role = userRole;
  }

}
