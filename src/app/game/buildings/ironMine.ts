import { ResourceBuilding } from "./base/resourceBuilding";
import { BuildingType } from "../types";

export class IronMine extends ResourceBuilding {
  constructor() {
    super(
      { 
        type: BuildingType.IronMine, 
        baseCost: 
        {
          timber: 75,
          clay: 65,
          iron: 70,
          population: 10
        }, 
        baseTime: 360, 
        maxLevel: 30 
      }
    )
  }
}
