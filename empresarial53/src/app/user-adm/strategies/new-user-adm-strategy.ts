import { User } from "src/app/types";
import { ScreenStrategy } from "./screen-strategy";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class NewUserAdmStrategy implements ScreenStrategy {


    constructor(private http:HttpClient){}

    loadUser(email?: string | undefined): Promise<User> {
        return Promise.resolve(<User>{})
    }
    saveUser(user: User): Promise<User> {
        const observable = this.http.post<any>(`/api/user`, user)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Adicione um novo administrador"
    }
   
}