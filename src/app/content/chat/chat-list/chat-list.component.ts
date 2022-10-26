import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../../../dao/chat';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chatList: Chat[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    console.log('ng on init');
    this.chatService.getChatList().subscribe(data => {
      this.chatList = data;
      console.log(data);
    });
  }

}
