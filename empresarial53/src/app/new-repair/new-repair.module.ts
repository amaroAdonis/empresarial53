import { NgModule } from "@angular/core";
import { NewRepairComponent } from "./new-repair.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NewRepairRouting } from "./new-repair-routing.module";

@NgModule({
    declarations: [
        NewRepairComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule,
        NewRepairRouting
    ]
})
export class NewRepairModule {}