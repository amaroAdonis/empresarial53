import { NgModule } from "@angular/core";
import { TenantComponent } from "./tenant.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TenantRouting } from "./tenant-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoadNewTenantComponent } from "./load-new-tenant.component";
import { LoadEditTenantComponent } from "./load-edit-tenant.component";

@NgModule({
    declarations: [
        TenantComponent,
        LoadNewTenantComponent,
        LoadEditTenantComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [
        RouterModule,
        TenantRouting,
    ]
})
export class TenantModule {}