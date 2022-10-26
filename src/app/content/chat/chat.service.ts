import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { chatList } from '../../mock-obj/chat-mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getChatList(): Observable<any> {
    return new BehaviorSubject(chatList);
  }

  getChatById(id: string): Observable<any> {
    return new BehaviorSubject(chatList.filter(chat => chat.id === id));
  }
}
