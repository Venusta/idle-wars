import { ResourceBuilding } from "./base/resourceBuilding";
import { BuildingType } from "../types";

export class ClayPit extends ResourceBuilding {
  constructor() {
    super(
      { 
        type: BuildingType.ClayPit, 
        baseCost: 
        {
          timber: 65,
          clay: 50,
          iron: 40,
          population: 10
        }, 
        baseTime: 300, 
        maxLevel: 30 
      }
    )
  }
}
