import { OrderData } from './order';

export interface Payment {
  id: string;
  orderData: OrderData;
  price: number;
  chatId: string;
  paymentStatus: PaymentStatus;
}

export enum PaymentStatus {
  WAIT = 'WAIT',
  PAYED = 'PAYED',
  CANCELED = 'CANCELED',
  OVERDUE = 'OVERDUE'
}
