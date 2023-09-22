import { NgModule } from "@angular/core";
import { PaymentComponent } from "./payment.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PaymentRouting } from "./payment-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";
import { LoadEditPaymentStrategy } from "./load-edit-payment.component";
import { LoadNewPaymentStrategy } from "./load-new-payment.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        PaymentComponent,
        LoadEditPaymentStrategy,
        LoadNewPaymentStrategy
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule,
        PaymentRouting
    ]
})
export class PaymentModule {}