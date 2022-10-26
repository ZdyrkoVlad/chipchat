export interface Chat {
  id: string;
  createUserId: string;
  usersIdList: string[];
  createDate: Date;
  messageList: Message[];
}

export interface Message {
  id: string;
  createUserId: string;
  messageText: string;
  createDate: Date;
}
