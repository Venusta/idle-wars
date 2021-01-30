import { action, observable } from 'mobx';
import { Resources } from "./types";
import { Building } from "../game/buildings/base/building"
import { TimberCamp, ClayPit, IronMine, HeadQuarters } from "../game/buildings"

export class Town {
  readonly id: number;
  @observable public buildings: Building[];
  @observable public resources: Resources;

  constructor(townId: number) {
    this.id = townId;
    this.buildings = [
      new HeadQuarters(),
      new TimberCamp(),
      new ClayPit(),
      new IronMine()
    ];
    this.resources = {
      timber: 500,
      clay: 500,
      iron: 500,
      population: 0
    };
  }

  @action
  addResources(resources: Resources): void {
    for (const [k, v] of Object.entries(resources)) {
      this.resources[k] += v;
    }
  }

  @action
  removeResources(resources: Resources): void {
    for (const [k, v] of Object.entries(resources)) {
      this.resources[k] -= v;
    }
  }

  @action
  constructBuilding(buildingType: number): void {
    const buildingIndex = this.buildings.findIndex((building) => building.type === buildingType);

    if (this.buildings[buildingIndex] == undefined) {
      console.error(`Failed to find building ${buildingType} in town ${this.id}`);
      return;
    }

    const cost = this.buildings[buildingIndex].getCost();    
    this.removeResources(cost);
    this.buildings[buildingIndex].construct();
  }

  getBuilding(buildingType: number): Building {
    const buildingIndex = this.buildings.findIndex((building) => building.type === buildingType);
    return this.buildings[buildingIndex];
  }

}