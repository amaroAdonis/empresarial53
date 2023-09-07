import { NgModule } from "@angular/core";
import { RoomTemplateComponent } from "./room-template.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RoomTemplateRouting } from "./room-template-routing.module";

@NgModule({
    declarations: [
        RoomTemplateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        RouterModule,
        RoomTemplateRouting 
    ]

})
export class RoomTemplateModule{}