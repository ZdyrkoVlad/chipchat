import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../../chat/chat.service';

@Component({
  selector: 'app-payment-list-item',
  templateUrl: './payment-list-item.component.html',
  styleUrls: ['./payment-list-item.component.scss']
})
export class PaymentListItemComponent implements OnInit {
  @Input() paymentObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
