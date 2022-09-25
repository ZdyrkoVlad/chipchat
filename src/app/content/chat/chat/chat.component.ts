import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../dao/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() standAlone = true;
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
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem \n' +
        '    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. \n' +
        '    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit \n' +
        '    lobortis nisl ut aliquip ex ea commodo consequat.'
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
