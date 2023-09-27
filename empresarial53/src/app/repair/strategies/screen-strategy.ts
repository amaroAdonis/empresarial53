import { Repair } from "src/app/types";

export class ScreenStrategy {
    loadRepair(orderNum:number): Promise<Repair> {throw Error("Not implemented")};
    saveRepair(repair:Repair): Promise<Repair> {throw Error("Not implemented")};
    getTitle():string {throw Error("Not implemented")};
}