import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../../../dao/chat';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {

  chatList: Chat[] = [];
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private chatService: ChatService) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.chatService.getChatList().pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.chatList = data;
    });
  }

}
