import { Building } from "./building";
import { BuildingType, BuildingProps, Resources } from "../../types";

export class ResourceBuilding extends Building {

  constructor({ type, baseCost, baseTime, maxLevel }: BuildingProps) {
    super({ type, baseCost, baseTime, maxLevel });
  }

  getResourceGeneration(): Resources {
    let resourceAmount = 5;
    if (this.level > 0) {
      resourceAmount = 30 * 1.163118 ^ (this.level - 1)
    }
    switch(this.type) {
      case BuildingType.TimberCamp:
        return { timber: resourceAmount };
      case BuildingType.ClayPit:
        return { clay: resourceAmount };
      case BuildingType.IronMine:
        return { iron: resourceAmount };
      default:
        console.error(`Unexpected bulding type in getResourceGeneration: ${this.type}`)
        return {};
    }
  }
}
