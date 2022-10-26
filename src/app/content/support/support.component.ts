import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSupportDialogComponent } from './create-support-dialog/create-support-dialog.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createSupportChat(): void {
    const dialogOption = {

    };

    const dialogRef = this.dialog.open(CreateSupportDialogComponent, dialogOption);

    dialogRef.afterClosed().pipe().subscribe(() => {
      console.log('Dialog close');
    });

  }

}
