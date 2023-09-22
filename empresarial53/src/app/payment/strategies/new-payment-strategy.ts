import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Payment } from "src/app/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class NewPaymentStrategy implements ScreenStrategy {

    constructor(private http:HttpClient) {}

    loadPayment(orderNum?: string): Promise<Payment> {
        return Promise.resolve(<Payment>{});
    }
    savePayment(payment: Payment): Promise<Payment> {
        const observable = this.http.post<any>(`api/pagamento`, payment)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Novo Pagamento";
    }
}