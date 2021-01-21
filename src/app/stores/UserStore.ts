import { observable, action } from "mobx"
import { ResourceModel, BuildingModel } from 'app/models';
import { buildingData } from "../components/BuildingTable/BuildingTableRow"
import { RootStore } from "./RootStore"

const defaultBuildings = [
  new BuildingModel(0, 0, 0),
  new BuildingModel(1, 0, 0),
  new BuildingModel(2, 0, 0),
  new BuildingModel(3, 0, 0)
];

const defaultResources = new ResourceModel(0);

enum ResourceType {
  Timber = 0,
  Clay = 1,
  Iron = 2,
  Population = 3
}

interface ResourcePayload {
  timber: number;
  clay: number;
  iron: number;
  population: number;
}

export class UserStore {
  private readonly root: RootStore;
  @observable public buildings: BuildingModel[];
  @observable public resources: ResourceModel;

  constructor(root: RootStore) {
    this.root = root;
    this.buildings = observable.array(defaultBuildings);
    this.resources = defaultResources;

    console.log(this.buildings);
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
  constructBuilding(buildingType: number, townId: number): void {
    const buildingIndex = this.buildings.findIndex((building) => building.townId === townId && building.buildingType === buildingType);
    if (this.buildings[buildingIndex] == undefined) {
      console.error(`Failed to find building ${buildingType} in town ${townId}`);
      return;
    }
    const { cost } = buildingData[this.buildings[buildingIndex].level];
    this.removeResources(cost);
    console.log(this.buildings[buildingIndex].level); // correct  / UI broken
    
    this.buildings[buildingIndex].level += 1;
  }
}
