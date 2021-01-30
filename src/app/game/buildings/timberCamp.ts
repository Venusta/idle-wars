import { ResourceBuilding } from "./base/resourceBuilding";
import { BuildingType } from "../types";

export class TimberCamp extends ResourceBuilding {
  constructor() {
    super(
      { 
        type: BuildingType.TimberCamp, 
        baseCost: 
        {
          timber: 50,
          clay: 60,
          iron: 40,
          population: 5
        }, 
        baseTime: 300, 
        maxLevel: 30 
      }
    )
  }
}
