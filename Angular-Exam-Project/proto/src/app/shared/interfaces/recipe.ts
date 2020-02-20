import { IUser } from './user';

export interface IRecipe {
    id: string;
    category: string;
    title: string;
    summary: string;
    imgUrlRecipe: string;
    authorId: string;
}