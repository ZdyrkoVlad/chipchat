import { OrderData } from './order';

export interface Invoice {
  id: string;
  orderData: OrderData;
  ownerId: string;
  invoiceData: InvoiceData;
}

export interface InvoiceData {
  status: string;
  price: string;
  createData: Date;
  paymentDate?: Date;
}
