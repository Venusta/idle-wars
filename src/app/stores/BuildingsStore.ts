import { BuildingModel } from 'app/models';
import { useLocalStore } from 'mobx-react';

export type BuildingsStore = ReturnType<typeof useBuildingsStore>;
export const useBuildingsStore = (defaultBuildings: BuildingModel[] = []) => {
  const store = useLocalStore(() => ({
    buildings: defaultBuildings,
    changeLevelBuilding(buildingType: number, townId: number, levelChange: number): void {
      console.log(`Attempting to level up building type ${buildingType} in town ${townId}`)
      console.log(`Buildings present in store:`)
      console.log(store.buildings)
      let building = store.buildings.filter((building) => building.townId === townId && building.buildingType === buildingType)[0];
      if(building == undefined) {
        console.error(`Failed to find building ${buildingType} in town ${townId}`)
      }
      building.level += levelChange;
    },
  }));
  return store;
};
