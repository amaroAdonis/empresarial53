import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { NewPaymentStrategy } from "./strategies/new-payment-strategy";

@Component({
    selector:"newpaymentroute",
    template:`<app-payment/>`,
    providers: [
        {provide: ScreenStrategy, useClass:NewPaymentStrategy}
    ]
})
export class LoadNewPaymentStrategy {}