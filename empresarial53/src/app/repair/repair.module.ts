import { NgModule } from "@angular/core";
import { RepairComponent } from "./repair.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RepairRouting } from "./repair-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoadNewRepairComponent } from "./load-new-repair.component";
import { LoadEditRepairComponent } from "./load-edit-repair.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        RepairComponent,
        LoadNewRepairComponent,
        LoadEditRepairComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        RouterModule,
        RepairRouting
    ]
})
export class RepairModule {}