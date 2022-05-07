//User collection에 맞는 인터페이스 정의
import { SchoolInfo } from "../school/Schoolinfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    age: number;
    school: SchoolInfo;
}