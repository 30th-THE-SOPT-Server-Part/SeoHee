import { UserInfo } from "../user/UserInfo";

export interface BlogInfo{
    title: string;
    author: string;
    content: string;
    tags: string[];
    reviewers: UserInfo[];
}