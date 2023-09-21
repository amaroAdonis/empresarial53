import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { NewTenantStrategy } from "./strategies/new-tenant-strategy";

@Component({
    selector: "newtenantroute",
    template: `<app-tenant/>`,
    providers: [
        {provide: ScreenStrategy, useClass: NewTenantStrategy}
    ]
})
export class LoadNewTenantComponent {}