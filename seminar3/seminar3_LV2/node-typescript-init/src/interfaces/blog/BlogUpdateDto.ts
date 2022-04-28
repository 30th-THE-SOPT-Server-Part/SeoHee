import { UserCreateDto } from "../user/UserCreateDto"

export interface BlogUpdateDto {
    title?: string;
    author?: string;
    content?: string;
    tags?: string[];
    reviewers?: UserCreateDto[];
}