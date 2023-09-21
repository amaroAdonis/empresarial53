import { Tenant } from "src/app/types";
import { ScreenStrategy } from "./screen-strategy";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class NewTenantStrategy implements ScreenStrategy {
    
    constructor(private http:HttpClient){
    }

    loadTenant(cpfCnpj?: string): Promise<Tenant> {
        return Promise.resolve(<Tenant>{});
    }
    saveTenant(tenant: Tenant): Promise<any> {
        const observable = this.http.post<any>('api/locatario', tenant)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Novo locatário";
    }
}