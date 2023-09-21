import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Tenant } from "src/app/types";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditTenantStrategy implements ScreenStrategy{

    constructor(private http:HttpClient){
    }
    
    loadTenant(cpfCnpj?: string | undefined): Promise<Tenant> {
        const observable = this.http.get<Tenant>(`api/locatario/${cpfCnpj}`);
        return firstValueFrom(observable);
    }
    saveTenant(tenant: Tenant): Promise<Tenant> {
        const observable = this.http.put<any>(`api/locatario/${tenant.cpfCnpj}`, tenant);
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Editando o locatário";
    }

    

}