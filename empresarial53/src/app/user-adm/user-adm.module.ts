import { NgModule } from "@angular/core";
import { UserAdmComponent } from "./user-adm.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DropdownModule } from "../dropdown/dropdown.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserAdmRoutingModule } from "./user-adm-routing.module";
import { LoadNewUserAdmComponent } from "./load-new-user-adm.component";
import { LoadEditUserAdmComponent } from "./load-edit-user-adm.component";

@NgModule({
    declarations: [
        UserAdmComponent,
        LoadNewUserAdmComponent,
        LoadEditUserAdmComponent
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
        UserAdmRoutingModule
        
    ]
})
export class UserAdmModule {}