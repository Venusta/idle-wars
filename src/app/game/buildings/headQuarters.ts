import { Building } from "./base/building";
import { BuildingType } from "../types";

export class HeadQuarters extends Building {
  constructor() {
    super(
        {
          type: BuildingType.Headquarters, 
          baseCost: {
            timber: 90,
            clay: 80,
            iron: 70,
            population: 5
          }, 
          baseTime: 300, 
          maxLevel: 30
        }
      )
  }
}