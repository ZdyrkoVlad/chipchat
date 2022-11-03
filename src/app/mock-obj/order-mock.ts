import { FuelType, Order, OrderStatus } from '../dao/order';

export const orderList: Order[] = [
  {
    id: '1',
    orderData: {
      model: 'A10',
      mark: 'AUDI',
      generation: '5',
      series: 'CS',
      modification: '-',
      yearOfManufacture: 2005,
      fuelType: FuelType.AI95,
      tuningType: 'Auto',
      vinNumber: 'AC2134CA2',
      addionalInfo: 'Some info',
    },
    createdUserID: '1',
    usersIdList: ['1', '2'],
    orderStatus: OrderStatus.IN_PROGRESS,
    createDate: new Date(),
    chatId: '1'
  },
  {
    id: '2',
    orderData: {
      model: 'M5',
      mark: 'BMW',
      generation: '6',
      series: 'CC',
      modification: '-',
      yearOfManufacture: 2008,
      fuelType: FuelType.AI95,
      tuningType: 'Auto',
      vinNumber: 'AS2100CA2',
      addionalInfo: 'Some info',
    },
    createdUserID: '1',
    usersIdList: ['1', '2'],
    orderStatus: OrderStatus.IN_PROGRESS,
    createDate: new Date(),
    chatId: '2'
  },
  {
    id: '3',
    orderData: {
      model: 'Acord',
      mark: 'Ford',
      generation: '6',
      series: 'CC',
      modification: '-',
      yearOfManufacture: 2008,
      fuelType: FuelType.AI95,
      tuningType: 'Auto',
      vinNumber: 'BB21012CA2',
      addionalInfo: 'Some info',
    },
    createdUserID: '2',
    usersIdList: ['1', '2'],
    orderStatus: OrderStatus.IN_PROGRESS,
    createDate: new Date(),
    chatId: '3'
  }

];
