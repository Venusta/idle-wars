import { observable } from 'mobx';
import { BuildingType } from '../components/BuildingTable/BuildingTableRow'

export class BuildingModel {
  readonly buildingType: BuildingType;
  @observable public level: number;

  constructor(buildingType: BuildingType, buildingLevel: number) {
    this.buildingType = buildingType;
    this.level = buildingLevel;
  }
}

export default BuildingModel;
