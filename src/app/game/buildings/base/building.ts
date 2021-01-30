import { action, observable } from 'mobx';
import { BuildingProps, Resources } from "../../types";
import { BuildingNamesDictionary, WorldSpeed } from "../../constants"

export class Building {
  type: number;
  @observable name: string;
  @observable level: number;
  baseCost: Resources;
  baseTime: number;
  maxLevel: number;
  requirements: any;

  constructor({ type, baseCost, baseTime, maxLevel, requirements }: BuildingProps) {
    this.type = type;
    this.name = BuildingNamesDictionary[type];
    this.baseCost = baseCost;
    this.baseTime = baseTime;
    this.level = 0;
    this.maxLevel = maxLevel;
    this.requirements = requirements;
  }

  @action
  levelUp = (): void => {
    this.level += 1;
  }

  test = () => {
    
  }

  getCost(): Resources { 
    const timber = this.baseCost.timber * (1.26 ** this.level);
    const clay = this.baseCost.clay * (1.275 ** this.level);
    const iron = this.baseCost.iron * (1.25 ** this.level);
    let population = this.baseCost.population * (1.17 ** this.level);
    if (this.level > 0) {
      population -= this.baseCost.population * (1.17 ** (this.level - 1));
    }
    return { timber, clay, iron, population: -population };
  }

  getBuildTime(headquarterLevel: number): number {
    return this.baseTime * 1.18 * 1.2 ** (Math.max(-13, this.level - 14 / this.level)) * 1.05 ** (-headquarterLevel) / WorldSpeed;
  }
}
