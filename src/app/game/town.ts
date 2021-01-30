import { action, observable } from 'mobx';
import { Resources, BuildingType } from "./types";
import { Building } from "../game/buildings/base/building"
import { Unit } from "./units/base/unit"
import { TimberCamp, ClayPit, IronMine, HeadQuarters, Farm, Warehouse } from "../game/buildings"
import { QueueManager } from 'app/queue/queueManager';

export class Town {
  readonly id: number;
  @observable public buildings: Building[];
  @observable public resources: Resources;
  public queueManager: QueueManager = new QueueManager();

  constructor(townId: number) {
    this.id = townId;
    this.buildings = [
      new HeadQuarters(this.queueManager),
      new TimberCamp(),
      new ClayPit(),
      new IronMine(),
      new Farm(),
      new Warehouse()
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
    const headQuarters = this.getBuilding(BuildingType.Headquarters) as HeadQuarters;
    const building = this.getBuilding(buildingType);
    const cost = building.getCost();
    // TODO: Check requirements
    this.removeResources(cost);
    headQuarters.queueBuilding(building);
  }

  getBuilding(buildingType: number): Building {
    const buildingIndex = this.buildings.findIndex((building) => building.type === buildingType);
    return this.buildings[buildingIndex];
  }
}