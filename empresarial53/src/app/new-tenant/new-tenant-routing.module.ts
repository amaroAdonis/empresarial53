import { RouterModule, Routes } from "@angular/router";
import { NewTenantComponent } from "./new-tenant.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:"",
        component: NewTenantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class NewTenantRouting {}