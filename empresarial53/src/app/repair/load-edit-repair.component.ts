import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { EditRepairStrategy } from "./strategies/edit-repair-strategy";

@Component({
    selector:"editrepairroute",
    template:`<app-repair/>`,
    providers:[
        {provide: ScreenStrategy, useClass: EditRepairStrategy}
    ]
})
export class LoadEditRepairComponent {}