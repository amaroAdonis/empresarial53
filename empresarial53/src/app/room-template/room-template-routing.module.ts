import { RouterModule, Routes } from "@angular/router";
import { RoomTemplateComponent } from "./room-template.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:"",
        component:RoomTemplateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomTemplateRouting {}