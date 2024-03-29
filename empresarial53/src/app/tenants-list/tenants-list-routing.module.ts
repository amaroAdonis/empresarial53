import { RouterModule, RouterState, Routes } from "@angular/router";
import { TenantsListComponent } from "./tenants-list.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path: "",
        component:TenantsListComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TenantsListRoutingModule {}