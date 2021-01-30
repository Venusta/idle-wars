export enum BuildingType {
  Headquarters = 0,
  TimberCamp = 1,
  ClayPit = 2,
  IronMine = 3,
  Barracks = 4,
  Stable = 5,
  Workshop = 6,
  Academy = 7,
  Smithy = 8,
  RallyPoint = 9,
  Statue = 10,
  Market = 11,
  Farm  = 12,
  Warehouse = 13,
  HidingPlace = 14,
  Wall = 15
}

export enum UnitType {
  SpearFighter = 0,
  Swordsman = 1,
  Axeman = 2,
  Archer = 3,
  Scout = 4,
  LightCavalry = 5,
  MountedArcher = 6,
  HeavyCavalry = 7,
  Ram = 8,
  Catapult = 9,
  Paladin = 10,
  Nobleman = 11,
  Militia = 12
}

export enum ResearchType {
  Axeman = 0,
  Archer = 1,
  Scout = 2,
  LightCavalry = 3,
  MountedArcher = 4,
  HeavyCavalry = 5,
  Ram = 6,
  Catapult = 7
}

export interface BuildingProps {
  type: number;
  baseCost: Resources;
  baseTime: number;
  maxLevel: number;
  requirements?: any;
}

export interface CanCreate {
  buildings?: Array<BuildingType>;
  units?: Array<UnitType>;
  research?: Array<ResearchType>;
}

export interface ProductionBuildingProps extends BuildingProps {
  creates: any;
}

export interface Resources {
  timber?: number;
  clay?: number;
  iron?: number;
  population?: number;
}

export enum QueueType {
  Buildings = 0,
  Units = 1,
  Research = 2
}