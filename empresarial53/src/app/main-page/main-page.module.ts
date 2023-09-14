import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MainPageRouting } from "./main-page-routing.module";
import { NgbdCarouselBasicModule } from "../carousel/carousel-basic.module";


@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbdCarouselBasicModule
    ],
    exports: [
        RouterModule,
        MainPageRouting
    ]
})
export class MainPageModule {}