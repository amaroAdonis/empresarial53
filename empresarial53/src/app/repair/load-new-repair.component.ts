import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { NewRepairStrategy } from "./strategies/new-repair-strategy";

@Component({
    selector:"newrepairroute",
    template:`<app-repair/>`,
    providers: [
        {provide: ScreenStrategy, useClass:NewRepairStrategy}
    ]
})
export class LoadNewRepairComponent{}