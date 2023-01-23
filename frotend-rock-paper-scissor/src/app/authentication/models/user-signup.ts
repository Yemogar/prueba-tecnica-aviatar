import { UserLogin } from "./user-login";

export interface UserSignup extends UserLogin{
    firstName: string;
    lastName: string
}