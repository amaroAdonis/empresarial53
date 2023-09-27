import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Payment } from "src/app/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditPaymentStrategy implements ScreenStrategy{

    constructor(private http:HttpClient){}

    loadPayment(orderNum?: number | undefined): Promise<Payment> {
        const observable = this.http.get<Payment>(`api/pagamento/${orderNum}`);
        return firstValueFrom(observable);
    }
    savePayment(payment: Payment): Promise<Payment> {
        const observable = this.http.put<any>(`api/pagamento/${payment.orderNum}`, payment);
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Editando o pagamento"
    }

}