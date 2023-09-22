import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { EditPaymentStrategy } from "./strategies/edit-payment-strategy";

@Component({
    selector:"editpaymentroute",
    template:`<app-payment/>`,
    providers: [
        {provide: ScreenStrategy, useClass:EditPaymentStrategy}
    ]
})
export class LoadEditPaymentStrategy {}