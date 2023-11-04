import { RouterModule, Routes } from "@angular/router";
import { UserAdmComponent } from "./user-adm.component";
import { NgModule } from "@angular/core";
import { LoadNewUserAdmComponent } from "./load-new-user-adm.component";
import { LoadEditUserAdmComponent } from "./load-edit-user-adm.component";

const routes:Routes = [
    {
        path:"",
        component: LoadNewUserAdmComponent,
    },
    {
        path:":orderNum",
        component: LoadEditUserAdmComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserAdmRoutingModule {}