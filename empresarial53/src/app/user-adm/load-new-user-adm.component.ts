import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { NewUserAdmStrategy } from "./strategies/new-user-adm-strategy";

@Component({
    selector:"newuseradmroute",
    template: `<user-adm/>`,
    providers: [
        {provide: ScreenStrategy, useClass: NewUserAdmStrategy}
    ]
})
export class LoadNewUserAdmComponent {}