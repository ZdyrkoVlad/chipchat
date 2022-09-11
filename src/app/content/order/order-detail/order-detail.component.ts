import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../../service/screen.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
    console.log(this.screenService.getScreenWidth);
    console.log(this.screenService.getScreenHeight);
  }

}
