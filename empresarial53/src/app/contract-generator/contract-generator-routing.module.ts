import { RouterModule, Routes } from "@angular/router";
import { ContractGeneratorComponent } from "./contract-generator.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:"",
        component: ContractGeneratorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContractGeneratorRouting {}