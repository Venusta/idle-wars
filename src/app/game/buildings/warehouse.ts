import { Building } from "./base/building";
import { BuildingType } from "../types";

export class Warehouse extends Building {
  constructor() {
    super(
      { 
        type: BuildingType.Warehouse, 
        baseCost: 
        {
          timber: 60,
          clay: 50,
          iron: 40,
          population: 0
        }, 
        baseTime: 340, 
        maxLevel: 30 
      }
    )
  }

  getStorageCapacity() {
    return 1000 * 1.2294934 ** (this.level - 1);
  }
}
