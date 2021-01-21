import { observable } from 'mobx';

export class BuildingModel {
  readonly buildingType: number;
  readonly townId: number;
  @observable public level: number;

  constructor(buildingType: number, buildingLevel: number, townId: number) {
    this.buildingType = buildingType;
    this.townId = townId;
    this.level = buildingLevel;
  }
}

export default BuildingModel;
