import { RouterModule, Routes } from "@angular/router";
import { CreateRoomComponent } from "./create-room.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:"",
        component: CreateRoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class CreateRoomRouting {}