import { NgModule } from "@angular/core";
import { TenantsListComponent } from "./tenants-list.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { TenantsListRoutingModule } from "./tenants-list-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        TenantsListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        TenantsListRoutingModule,
        DropdownModule,
        NgbModule,

    ]
})
export class TenantsListModule {}