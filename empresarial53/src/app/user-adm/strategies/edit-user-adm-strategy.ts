import { User } from "src/app/types";
import { ScreenStrategy } from "./screen-strategy";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class EditUserAdmStrategy implements ScreenStrategy{

    constructor(private http:HttpClient){}

    loadUser(email?: string | undefined): Promise<User> {
        const observable = this.http.get<User>(`/api/user/${email}`)
        return firstValueFrom(observable);
    }
    saveUser(user: User): Promise<any> {
        const observable = this.http.put<any>(`/api/user/${user.orderNum}`, user)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Editando o administrador"
    }
}