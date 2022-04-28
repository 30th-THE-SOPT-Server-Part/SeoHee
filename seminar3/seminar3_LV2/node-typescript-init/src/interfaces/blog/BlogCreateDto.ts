import { UserCreateDto } from "../user/UserCreateDto"

export interface BlogCreateDto {
    title: string;
    author: string;
    content: string;
    tags?: string[];
    reviewers?: UserCreateDto[];
}