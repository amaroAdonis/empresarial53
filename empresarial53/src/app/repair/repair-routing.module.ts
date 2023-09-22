import { RouterModule, Routes } from "@angular/router";
import { RepairComponent } from "./repair.component";
import { NgModule } from "@angular/core";
import { LoadNewRepairComponent } from "./load-new-repair.component";
import { LoadEditRepairComponent } from "./load-edit-repair.component";

const routes: Routes = [
    {
        path: "",
        component: LoadNewRepairComponent
    },
    {
        path:":orderNum",
        component:LoadEditRepairComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepairRouting {}