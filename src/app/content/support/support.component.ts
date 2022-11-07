import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSupportDialogComponent } from './create-support-dialog/create-support-dialog.component';
import { role } from '../../dao/role';
import { UserService } from '../../service/user.service';
import { SupportService } from './support.service';
import { takeUntil } from 'rxjs/operators';
import { Support } from '../../dao/support';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit, OnDestroy {
  roleEnum = role;

  supportList: Support[] = [];

  get userRole(): role | undefined {
    return this.userService.role;
  }

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private dialog: MatDialog, private userService: UserService, private supportService: SupportService) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.supportService.getSupportList().pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.supportList = data;
    });
  }

  createSupportChat(): void {
    const dialogOption = {};

    const dialogRef = this.dialog.open(CreateSupportDialogComponent, dialogOption);

    dialogRef.afterClosed().pipe().subscribe(() => {
      console.log('Dialog close');
    });

  }

}
