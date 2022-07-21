import { ProductModel } from "./product";
import { UserModel } from "./user";

export class ReviewModel {
    id: string;
    product: ProductModel;
    rating: number;
    date_created: string;
    title: string;
    summary: string;
    status: string;
    reviewer: UserModel;
    replies: ReplyModel[]
    likes: boolean;
    dislikes: boolean;
}

export class ReplyModel {
    date_created: string;
    date_updated: string;
    id: number;
    reviewer: string;
    reviewer_ip: string;
    summary: string;
    title:  string;
}