import { NgModule } from "@angular/core";
import { NewRepairComponent } from "./new-repair.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NewRepairRouting } from "./new-repair-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        NewRepairComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        NewRepairRouting
    ]
})
export class NewRepairModule {}