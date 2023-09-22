import { NgModule } from "@angular/core";
import { PaymentsListComponent } from "./payments-list.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { PaymentsListRoutingModule } from "./payments-list-routing.module";

@NgModule({
    declarations: [PaymentsListComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        PaymentsListRoutingModule
    ]
})
export class PaymentsListModule {}