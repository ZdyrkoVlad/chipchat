import { Support } from '../dao/support';

export const supportList: Support[] = [
  {
    id: '1',
    chatId: 'sup1',
    question: 'I have problems with creating order.',
    textRequest: 'Hello. I have problems with creating order.' +
      ' In some cases, when a create a new order and fill fields other filled field unexpectedly clearing them self',
    createUserId: '2',
    supportUserID: '4',
    createDate: new Date(),
  },
  {
    id: '2',
    chatId: 'sup2',
    question: 'Houdy dude',
    textRequest: 'How y dude. ',
    createUserId: '2',
    supportUserID: '4',
    createDate: new Date(),
  },
  {
    id: '3',
    chatId: 'sup3',
    question: 'I have problems with payment flow.',
    textRequest: 'Hi man. I have problems with creating order.' +
      ' In some cases, when a create a new order and fill fields other filled field unexpectedly clearing them self',
    createUserId: '2',
    supportUserID: '4',
    createDate: new Date(),
  }
];
