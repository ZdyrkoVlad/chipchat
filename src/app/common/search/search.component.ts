import { Component, Input, OnInit, Output } from '@angular/core';
import { CreateSupportDialogComponent } from '../../content/support/create-support-dialog/create-support-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchString = '';
  @Input() filterFlag = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  setFilter(): void {
    const dialogOption = {};

    const dialogRef = this.dialog.open(FilterDialogComponent, dialogOption);

    dialogRef.afterClosed().pipe().subscribe(() => {
      console.log('Dialog close');
    });

  }
}
