import { Chat } from '../dao/chat';

export const chatList: Chat[] = [
  {
    id: '1',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello From Chat ID 1'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Some hello 11'
      }]
  },
  {
    id: '2',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello From Chat ID 2'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Some hello 22'
      }]
  },
  {
    id: '3',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello From Chat ID 3'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Some hello   33'
      }]
  }, {
    id: '4',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello From Chat ID 4'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Yep, hello'
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Some hello  44'
      }]
  },
  {
    id: 'sup1',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello SUP !'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Man, do you have some tea? '
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Only coffee. Let you a cup ?'
      }]
  },
  {
    id: 'sup2',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello SUP 2!'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Man, do you have some beer? '
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Only be. Let you a some ?'
      }]
  },
  {
    id: 'sup3',
    createUserId: '1',
    usersIdList: ['1', '2'],
    createDate: new Date(),
    messageList: [{
      id: '1',
      authorId: '1',
      createDate: new Date(),
      messageText: 'Some hello SUP 3!'
    },
      {
        id: '2',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Man/ '
      },
      {
        id: '4',
        authorId: '2',
        createDate: new Date(),
        messageText: 'Omen'
      }]
  },
];

