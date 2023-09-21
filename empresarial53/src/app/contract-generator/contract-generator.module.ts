import { NgModule } from "@angular/core";
import { ContractGeneratorComponent } from "./contract-generator.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DropdownModule } from "../dropdown/dropdown.module";
import { ContractGeneratorRouting } from "./contract-generator-routing.module";

@NgModule({
    declarations: [
        ContractGeneratorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        ContractGeneratorRouting
    ]
})
export class ContractGeneratorModule {}