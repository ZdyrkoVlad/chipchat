import { Message } from './message';

export class Chat {
  id: string;
  createUserId: string;
  usersIdList: string[];
  createDate: Date;
  messageList: Message[];

  constructor(chat: Chat) {
    this.id = chat.id;
    this.createUserId = chat.createUserId;
    this.usersIdList = chat.usersIdList;
    this.createDate = chat.createDate;
    this.messageList = chat.messageList;
  }
}
