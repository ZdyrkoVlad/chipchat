import { Component, Input, OnInit } from '@angular/core';
import { Support } from '../../../dao/support';
import { ChatService } from '../../chat/chat.service';
import { take } from 'rxjs/operators';
import { Chat } from '../../../dao/chat';

@Component({
  selector: 'app-support-list-item',
  templateUrl: './support-list-item.component.html',
  styleUrls: ['./support-list-item.component.scss']
})
export class SupportListItemComponent implements OnInit {

  @Input() supportData!: Support;
  lastMessage: string | undefined;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getChatById(this.supportData.chatId).pipe(take(1)).subscribe((chatData: Chat) => {
      this.lastMessage = chatData.messageList[chatData.messageList.length - 1].messageText;
    });
  }

}
