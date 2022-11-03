import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSupportDialogComponent } from './create-support-dialog/create-support-dialog.component';
import { role } from '../../dao/role';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  roleEnum = role;

  constructor(private dialog: MatDialog, private userService: UserService) { }

  get userRole(): role | undefined {
    return this.userService.role;
  }

  ngOnInit(): void {
  }

  createSupportChat(): void {
    const dialogOption = {};

    const dialogRef = this.dialog.open(CreateSupportDialogComponent, dialogOption);

    dialogRef.afterClosed().pipe().subscribe(() => {
      console.log('Dialog close');
    });

  }

}
