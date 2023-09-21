import { RouterModule, Routes } from "@angular/router";
import { RepairComponent } from "./repair.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: RepairComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepairRouting {}