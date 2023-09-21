import { NgModule } from "@angular/core";
import { PaymentComponent } from "./payment.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PaymentRouting } from "./payment-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        PaymentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        PaymentRouting
    ]
})
export class PaymentModule {}