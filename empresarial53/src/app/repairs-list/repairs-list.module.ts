import { NgModule } from "@angular/core";
import { RepairsListComponent } from "./repairs-list.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RepairsListRoutingModule } from "./repairs-list-routing.module";

@NgModule({
    declarations: [
        RepairsListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RepairsListRoutingModule
    ]
})
export class RepairsListModule {}