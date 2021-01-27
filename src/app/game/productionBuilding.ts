import { Building } from "./building";
import { ProductionBuildingProps, ResourceGenProps } from "./types";

export class ProductionBuilding extends Building {
  id: number;
  name: string;
  cost: any;
  maxLevel: number;
  buildTime: number;
  generate: ResourceGenProps;

  constructor({ id, name, cost, maxLevel, buildTime, generate }: ProductionBuildingProps) {
    super({ id, name, cost, maxLevel, buildTime })
    this.generate = generate;
  }
}
