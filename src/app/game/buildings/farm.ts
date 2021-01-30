import { Building } from "./base/building";
import { BuildingType } from "../types";

export class Farm extends Building {
  constructor() {
    super(
      { 
        type: BuildingType.Farm, 
        baseCost: 
        {
          timber: 45,
          clay: 40,
          iron: 30,
          population: 0
        }, 
        baseTime: 400, 
        maxLevel: 30 
      }
    )
  }

  getMaxPopulation() {
    return 240 * 1.172103 ** (this.level - 1);
  }
}
