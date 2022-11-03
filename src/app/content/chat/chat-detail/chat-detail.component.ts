import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { ChatService } from '../chat.service';
import { Chat } from '../../../dao/chat';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  chatData!: Chat;

  constructor(private chatService: ChatService, private activateRoute: ActivatedRoute) {

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.chatService.getChatById(this.activateRoute.snapshot.params['id']).pipe(takeUntil(this.destroyed$)).subscribe(
      (data) => {
        console.log(data);
        this.chatData = data;
      }
    );
  }

}
