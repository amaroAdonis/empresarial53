import { Repair } from "src/app/types";
import { ScreenStrategy } from "./screen-strategy";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class NewRepairStrategy implements ScreenStrategy {

    constructor(private http:HttpClient){}

    loadRepair(orderNum: string): Promise<Repair> {
        return Promise.resolve(<Repair>{});
    }
    saveRepair(repair: Repair): Promise<Repair> {
        const observable = this.http.post<any>('api/manutencao', repair);
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Nova Manutenção";
    }
}