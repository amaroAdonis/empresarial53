import { Payment } from "src/app/types";

export class ScreenStrategy {
    loadPayment(orderNum?:number):Promise<Payment> {throw Error("Not implemented")};
    savePayment(payment:Payment):Promise<Payment> {throw Error("Not implemented")};
    getTitle():string {throw Error("Not implemented")};
}