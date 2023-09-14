import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginRouting } from "./login-routing.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        RouterModule,
        LoginRouting
    ]
})
export class LoginModule {}