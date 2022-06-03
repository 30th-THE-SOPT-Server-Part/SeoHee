//request 받을 것 정리
import { SchoolInfo } from "../school/SchoolInfo";

export interface UserCreateDto {
    name: string;
    phone: string;
    email: string;
    age?: number;
    school?: SchoolInfo;
}