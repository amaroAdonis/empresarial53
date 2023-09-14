import { NgModule } from "@angular/core";
import { BuildingComponent } from "./building.component";
import { CommonModule } from "@angular/common";
import { BuildingRoutingModule } from "./building-routing.module";
import { RouterModule } from "@angular/router";
import { DropdownModule } from "../dropdown/dropdown.module";


@NgModule({
    declarations: [
        BuildingComponent
    ],
    imports: [
        CommonModule,
        BuildingRoutingModule,
        RouterModule,
        DropdownModule
    ],
    exports: [RouterModule]
})
export class BuildingModule {}