import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { EditUserAdmStrategy } from "./strategies/edit-user-adm-strategy";

@Component({
    selector: "edituseradmroute",
    template: `<user-adm/>`,
    providers: [
        {provide: ScreenStrategy, useClass:EditUserAdmStrategy}
    ]
})
export class LoadEditUserAdmComponent {}