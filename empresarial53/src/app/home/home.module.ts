import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderTemplateModule } from "../header-template/header-template.module";
import { RouterModule } from "@angular/router";
import { DropdownModule } from "../dropdown/dropdown.module";
import { RoomButtonComponent } from "./room-button/room-button.component";


@NgModule({
    declarations: [
        HomeComponent,
        RoomButtonComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderTemplateModule,
        DropdownModule
    ],
    exports: [RouterModule]
})
export class HomeModule{}