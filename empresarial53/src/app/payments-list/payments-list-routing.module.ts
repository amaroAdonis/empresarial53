import { RouterModule, Routes } from "@angular/router";
import { PaymentsListComponent } from "./payments-list.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:"",
        component:PaymentsListComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PaymentsListRoutingModule {};