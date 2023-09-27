import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentComponent } from "./payment.component";
import { LoadNewPaymentStrategy } from "./load-new-payment.component";
import { LoadEditPaymentStrategy } from "./load-edit-payment.component";

const routes: Routes = [
    {
        path:"",
        component: LoadNewPaymentStrategy
    },
    {
        path:":orderNum",
        component: LoadEditPaymentStrategy
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRouting {}