import { IUser } from './user';

export interface ICause {
    id: string;
    cause: string;
    description: string;
    neededAmount: number;
    collectedAmount: number;
    imageUrl: string;
    author: IUser;
  }