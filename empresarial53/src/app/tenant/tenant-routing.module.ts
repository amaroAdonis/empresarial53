import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoadNewTenantComponent } from "./load-new-tenant.component";
import { LoadEditTenantComponent } from "./load-edit-tenant.component";

const routes: Routes = [
    {
        path:"",
        component: LoadNewTenantComponent,
    }, {
        path:":id",
        component: LoadEditTenantComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class TenantRouting {}
