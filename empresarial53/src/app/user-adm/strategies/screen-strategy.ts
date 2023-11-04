import { User } from 'src/app/types';

export class ScreenStrategy{
    loadUser(email?:string): Promise<User> {throw Error("Not implemented")};
    saveUser(user: User): Promise<User> {throw Error("Not implemented")};
    getTitle(): string {throw Error("Not implemented")};
}