import { NgModule } from "@angular/core";
import { NewTenantComponent } from "./new-tenant.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NewTenantRouting } from "./new-tenant-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        NewTenantComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        NewTenantRouting
    ]
})
export class NewTenantModule {}