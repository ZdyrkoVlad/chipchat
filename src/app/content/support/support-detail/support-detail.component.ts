import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../chat/chat.service';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SupportService } from '../support.service';
import { Chat } from '../../../dao/chat';
import { Support } from '../../../dao/support';
import { ScreenService } from '../../../service/screen.service';

@Component({
  selector: 'app-support-detail',
  templateUrl: './support-detail.component.html',
  styleUrls: ['./support-detail.component.scss']
})
export class SupportDetailComponent implements OnInit, OnDestroy {
  statusMaxSize = true;
  width: number = 0;

  support!: Support;
  chat!: Chat;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private screenService: ScreenService, private chatService: ChatService, private activateRoute: ActivatedRoute, private supportService: SupportService) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {

    [this.width] = this.screenService.onWindowResize();
    if (this.width <= 1024) {
      this.statusMaxSize = false;
    }

    this.supportService.getSupportByID(this.activateRoute.snapshot.params['id']).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.support = data;
      this.chatService.getChatById(this.support.chatId).pipe(takeUntil(this.destroyed$)).subscribe(chatData => {
        this.chat = chatData;
      });
    });
  }

  changeStatusSize(): void {
    this.statusMaxSize = !this.statusMaxSize;
  }

}
