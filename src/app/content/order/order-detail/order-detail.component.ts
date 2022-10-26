import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../../service/screen.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  statusMaxSize = true;
  width: number = 0;

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
    [this.width] = this.screenService.onWindowResize();
    if (this.width <= 1024) {
      this.statusMaxSize = false;
    }
  }

  changeStatusSize(): void {
    this.statusMaxSize = !this.statusMaxSize;
  }

}
