import { RouterModule, Routes } from "@angular/router";
import { RepairsListComponent } from "./repairs-list.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:"",
        component: RepairsListComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepairsListRoutingModule {}