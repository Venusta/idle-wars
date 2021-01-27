import { observable, action } from "mobx"
import { TownModel } from 'app/models';
import { BuildingType } from "../components/BuildingTable/BuildingTableRow"
import { RootStore } from "./RootStore"

enum ResourceType {
  Timber = 0,
  Clay = 1,
  Iron = 2,
  Population = 3
}

export class UserStore {
  private readonly root: RootStore;
  @observable public towns: TownModel[]

  constructor(root: RootStore) {
    this.root = root;
    this.towns = [new TownModel(0)]
  }

  @action
  constructBuilding2(townId: number, building: BuildingType): void {
    const townIndex = this.towns.findIndex((town) => town.id === townId)
    this.towns[townIndex].constructBuilding(building)
  }
}
