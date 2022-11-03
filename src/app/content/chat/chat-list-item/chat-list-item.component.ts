import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../../../dao/chat';
import { chatList } from '../../../mock-obj/chat-mock';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss']
})
export class ChatListItemComponent implements OnInit {

  @Input() chatData!: Chat;

  lastMessage: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.lastMessage = this.chatData.messageList[this.chatData.messageList.length - 1].messageText;
  }

}
