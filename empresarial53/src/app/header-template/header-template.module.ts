import { NgModule } from "@angular/core";
import { HeaderTemplateComponent } from "./header-template.component";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownModule } from "../dropdown/dropdown.module";


@NgModule({
    declarations: [
        HeaderTemplateComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        
    ],
    exports: [
        RouterModule, 
    ]
})
export class HeaderTemplateModule {}