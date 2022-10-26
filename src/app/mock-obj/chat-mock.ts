import { Chat, Message } from '../dao/chat';

export const messageExample: Message = {
  id: '1',
  createUserId: '1',
  createDate: new Date(),
  messageText: 'Some hello'
};

export const chatList: Chat[] = [
  {
    id: '1',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      createUserId: '1',
      createDate: new Date(),
      messageText: 'Some hello'
    },
      {
        id: '2',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Some hello'
      }]
  },
  {
    id: '2',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      createUserId: '1',
      createDate: new Date(),
      messageText: 'Some hello'
    },
      {
        id: '2',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Some hello'
      }]
  },
  {
    id: '3',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      createUserId: '1',
      createDate: new Date(),
      messageText: 'Some hello'
    },
      {
        id: '2',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Some hello'
      }]
  }, {
    id: '4',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      createUserId: '1',
      createDate: new Date(),
      messageText: 'Some hello'
    },
      {
        id: '2',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        createUserId: '2',
        createDate: new Date(),
        messageText: 'Some hello'
      }]
  },
];

