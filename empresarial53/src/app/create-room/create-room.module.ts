import { NgModule } from "@angular/core";
import { CreateRoomComponent } from "./create-room.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CreateRoomRouting } from "./create-room-routing.module";

@NgModule({
    declarations: [
        CreateRoomComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule,
        CreateRoomRouting
    ]
})
export class CreateRoomModule {}