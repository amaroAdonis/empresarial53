import { NgModule } from "@angular/core";
import { RoomTemplateComponent } from "./room-template.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RoomTemplateRouting } from "./room-template-routing.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [
        RoomTemplateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DropdownModule
    ],
    exports: [
        RouterModule,
        RoomTemplateRouting 
    ]

})
export class RoomTemplateModule{}