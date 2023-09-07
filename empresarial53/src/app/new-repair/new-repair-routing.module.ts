import { RouterModule, Routes } from "@angular/router";
import { NewRepairComponent } from "./new-repair.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: NewRepairComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewRepairRouting {}