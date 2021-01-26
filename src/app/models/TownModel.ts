import { action, observable } from 'mobx';
import { ResourceModel, BuildingModel } from 'app/models';
import { buildingData, BuildingType } from '../components/BuildingTable/BuildingTableRow'

interface ResourceGeneration {
  timberPerHour: number;
  clayPerHour: number;
  ironPerHour: number;
}

interface ResourcePayload {
  timber: number;
  clay: number;
  iron: number;
  population: number;
}

const resourceProduction = [
  0, 30, 35, 41, 47, 55, 64, 74, 86, 100, 117, 136, 158, 184, 214, 249, 289, 337, 391, 455, 530, 616, 717, 833, 969, 1127, 1311, 1525, 1774, 2063, 2400
]

const defaultBuildings = [
  new BuildingModel(BuildingType.Headquarters, 0),
  new BuildingModel(BuildingType.TimberCamp, 0),
  new BuildingModel(BuildingType.ClayPit, 0),
  new BuildingModel(BuildingType.IronMine, 0)
];

const defaultResources = new ResourceModel(0);

export class TownModel {
  readonly id: number;
  @observable public buildings: BuildingModel[];
  @observable public resources: ResourceModel;
  @observable public resourceGeneration: ResourceGeneration;

  constructor(townId: number) {
    this.id = townId;
    this.buildings = defaultBuildings;
    this.resources = defaultResources;
  }

  @action
  addResources(payload: ResourcePayload): void {
    for (const [k, v] of Object.entries(payload)) {
      this.resources[k] += v;
    }
  }

  @action
  removeResources(payload: ResourcePayload): void {
    for (const [k, v] of Object.entries(payload)) {
      this.resources[k] -= v;
    }
  }

  @action
  constructBuilding(buildingType: number): void {
    const buildingIndex = this.buildings.findIndex((building) => building.buildingType === buildingType);
    if (this.buildings[buildingIndex] == undefined) {
      console.error(`Failed to find building ${buildingType} in town ${this.id}`);
      return;
    }
    const { cost } = buildingData[this.buildings[buildingIndex].level];
    this.removeResources(cost);
    this.buildings[buildingIndex].level += 1;
    // this.calculateResourceGeneration
  }

  calculateResourceGeneration(townId: number): {} {
    const timberCamp = filterBuilding(this.buildings, BuildingType.TimberCamp);
    const clayPit = filterBuilding(this.buildings, BuildingType.ClayPit);
    const ironMine = filterBuilding(this.buildings, BuildingType.IronMine);

    return {
      timber: resourceProduction[timberCamp.level],
      clay: resourceProduction[clayPit.level],
      iron: resourceProduction[ironMine.level]
    }
  }

  @action
  generateResources(townId: number): void {

  }
}

const filterBuilding = (buildings: BuildingModel[], buildingType: number) => {
  return buildings.filter((building) => building.buildingType === buildingType)[0];
}

export default TownModel;
