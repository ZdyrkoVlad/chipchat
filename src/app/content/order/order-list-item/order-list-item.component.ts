import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../dao/order';

@Component({
  selector: 'app-order-list-item[order]',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
