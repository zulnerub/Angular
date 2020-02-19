import { IUser } from './user';

export interface IRecipe {
    id: string;
    category: string;
    title: string;
    summary: string;
    imgUrl: string;
    author: IUser;
}