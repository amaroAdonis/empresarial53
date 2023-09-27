import { Repair } from "src/app/types";
import { ScreenStrategy } from "./screen-strategy";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditRepairStrategy implements ScreenStrategy {

    constructor(private http:HttpClient) {}

    loadRepair(orderNum: number): Promise<Repair> {
        const observable = this.http.get<Repair>(`api/manutencao/${orderNum}`);
        return firstValueFrom(observable);
    }
    saveRepair(repair: Repair): Promise<Repair> {
        const observable = this.http.put<any>(`api/manutencao/${repair.orderNum}`, repair);
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Editando o pagamento";
    }
}