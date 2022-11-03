import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../dao/message';
import { ChatService } from '../chat.service';
import { Chat } from '../../../dao/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() standAlone = true;
  @Input() chatObject!: Chat;
  messageText = '';

  constructor() { }

  ngOnInit(): void {
    if (!this.chatObject) {
      this.chatObject = new Chat({ id: '1', createDate: new Date(), createUserId: '1', messageList: [], usersIdList: ['1', '2'] });
    }

  }

  sendMessage(): void {
    const newMessage: Message = {
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: this.messageText
    };

    this.chatObject.messageList.push(newMessage);
    this.messageText = '';
  }

}
