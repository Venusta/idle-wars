import { Building } from "./building";
import { ProductionBuildingProps, CanCreate } from "../../types";

export class ProductionBuilding extends Building {
  creates: CanCreate;

  constructor({ type, baseCost, baseTime, maxLevel, requirements, creates }: ProductionBuildingProps) {
    super({ type, baseCost, baseTime, maxLevel, requirements })
    this.creates = creates;
  }
}
