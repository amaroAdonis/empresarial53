import { NgModule } from "@angular/core";
import { PaymentsListComponent } from "./payments-list.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { PaymentsListRoutingModule } from "./payments-list-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [PaymentsListComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        PaymentsListRoutingModule,
        NgbModule,
        DropdownModule
    ]
})
export class PaymentsListModule {}