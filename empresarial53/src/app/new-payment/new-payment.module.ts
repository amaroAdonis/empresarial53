import { NgModule } from "@angular/core";
import { NewPaymentComponent } from "./new-payment.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NewPaymentRouting } from "./new-payment-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        NewPaymentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        NewPaymentRouting
    ]
})
export class NewPaymentModule {}