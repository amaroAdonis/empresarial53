import { Tenant } from "src/app/types";

export class ScreenStrategy {
    loadTenant(cpfCnpj?:string): Promise<Tenant> {throw Error ("Not implemented")}
    saveTenant(tenant:Tenant): Promise<Tenant> {throw Error ("Not implemented")}
    getTitle():string {throw Error ("Not implemented")}
}