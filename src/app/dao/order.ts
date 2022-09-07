export interface Order {
  id: string;
  carData: CarData;
}

export interface CarData {
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
  DIESEL = 'diesel'
}

