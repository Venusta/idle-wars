export interface ResourcesProps {
  timber?: number;
  clay?: number;
  iron?: number;
  population?: number;
}
export interface ResourceProps {
  id: number;
  name: string;
}

export interface ResourceGenProps {
  timber?: number;
  clay?: number;
  iron?: number;
}

export enum BuildingType {
  Headquarters = 0,
  TimberCamp = 1,
  ClayPit = 2,
  IronMine = 3
}

export interface BuildingProps {
  type: number;
  baseCost: Resources;
  baseTime: number;
  maxLevel: number;
  requirements?: any;
}

export interface ProductionBuildingProps extends BuildingProps {
  creates: ResourceGenProps;
}

export interface Resources {
  timber?: number;
  clay?: number;
  iron?: number;
  population?: number;
}