import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderTemplateModule } from "../header-template/header-template.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderTemplateModule
    ],
    exports: [RouterModule]
})
export class HomeModule{}