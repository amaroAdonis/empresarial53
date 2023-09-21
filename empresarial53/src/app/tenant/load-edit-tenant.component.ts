import { Component } from "@angular/core";
import { EditTenantStrategy } from "./strategies/edit-tenant-strategy";
import { ScreenStrategy } from "./strategies/screen-strategy";

@Component({
    selector: "edittenantroute",
    template: `<app-tenant/>`,
    providers: [
        {provide: ScreenStrategy, useClass: EditTenantStrategy}
    ]
})
export class LoadEditTenantComponent {}