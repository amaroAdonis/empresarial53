import { NgModule } from "@angular/core";
import { RepairsListComponent } from "./repairs-list.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RepairsListRoutingModule } from "./repairs-list-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        RepairsListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RepairsListRoutingModule,
        NgbModule,
        DropdownModule
    ]
})
export class RepairsListModule {}