export interface Order {
  id: string;
  orderData: OrderData;
  orderStatus: OrderStatus;
  chatId: string;
  createdUserID: string;
  usersIdList: string[];
  createDate: Date;
}

export interface OrderData {
  model: string;
  mark: string;
  generation: string;
  series: string;
  modification: string;
  yearOfManufacture: number;
  fuelType: FuelType;
  tuningType: string;
  vinNumber: string;
  addionalInfo: string;
}

export enum FuelType {
  AI95 = 'AI95',
  AI98 = 'AI98',
  AI100 = 'AI100',
  DIESEL = 'Diesel'
}

export enum OrderStatus {
  IN_PROGRESS = 'IN PROGRESS',
  PAYMENTED = 'PAYMENTED',
  OVERDUE = 'OVERDUE',
  CANCELED = 'CANCELED'
}

