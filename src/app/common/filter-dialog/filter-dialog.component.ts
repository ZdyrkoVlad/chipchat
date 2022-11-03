import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  selected: string | undefined = undefined;
  selectedUserRole: string = '';
  filterForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}
