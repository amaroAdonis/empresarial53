import { NgModule } from "@angular/core";
import { RepairComponent } from "./repair.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RepairRouting } from "./repair-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        RepairComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        RepairRouting
    ]
})
export class RepairModule {}