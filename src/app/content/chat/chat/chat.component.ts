import { Component, OnInit } from '@angular/core';
import { Message } from '../../../dao/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageText = '';
  MessageList: Message[] = [
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    },
    {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: 'Some hello'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    const newMessage = {
      id: '1',
      authorId: '1',
      createDate: '123333333333',
      text: this.messageText
    };

    this.MessageList.push(newMessage);
    this.messageText = '';
  }

}
