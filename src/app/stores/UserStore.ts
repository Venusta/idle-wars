import { observable, action } from "mobx"
import { ResourceModel, BuildingModel, TownModel } from 'app/models';
import { buildingData, BuildingType } from "../components/BuildingTable/BuildingTableRow"
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

const queueTypes = {
  headquarters: 0,
  stable: 1,
  barracks: 2,
  research: 3,
  statue: 4,
  workshop: 5,
  academy: 6,
}

const time2 = new Date().valueOf();

const blah = [
  {
    name: "Town Name",
    id: 0, //uuid?
    coords: { x: 5, y: 10 }, // maybe, probably to calc time/distance between each village w/e

    hqQueue: [
      { item: "timberCamp", amount: 1, endTime: time2 },
      { item: "timberCamp", amount: 1, endTime: time2 + 60 },
      { item: "timberCamp", amount: 1, endTime: time2 + 90 },
    ],
    stableQueue: [
      { item: "scout", amount: 50, endTime: 278934567823645 },
      { item: "scout", amount: 10, endTime: 278934567823649 },
    ],
    barracksQueue: [
      { item: "spear", amount: 20, endTime: 278934567823234 },
      { item: "light cav", amount: 1, endTime: 278934567823234 },
    ],
    // queue: [
    //   { type: queueTypes.headquarters, item: "timberCamp", amount: 1, endTime: 278934567823645 },
    //   { type: queueTypes.headquarters, item: "timberCamp", amount: 1, endTime: 278934567823645 },
    //   { type: queueTypes.headquarters, item: "timberCamp", amount: 1, endTime: 278934567823645 },
    //   { type: queueTypes.stable, item: "scout", amount: 50, endTime: 278934567823645 },
    //   { type: queueTypes.stable, item: "scout", amount: 10, endTime: 278934567823649 },
    //   { type: queueTypes.barracks, item: "spear", amount: 20, endTime: 278934567823234 },
    //   { type: queueTypes.research, item: "light cav", amount: 1, endTime: 278934567823234 },
    // ],

    buildings: {
      headquarters: 10,
      barracks: 5,
      stable: 2,
      timberCamp: 10,
      clayPit: 7,
      ironMine: 4,
      warehouse: 7,
      farm: 4,
      // all the buildings
    },
    population: [50, 386],
    units: {
      spear: 9,
      lightCav: 50,
      scout: 20,
    },
    resources: {
      timber: 1150,
      clay: 1160,
      iron: 1170,
      max: 3454, // calc from warehouse level
    },
    resourceGeneration: {
      timber: 175,
      clay: 111,
      iron: 71,
    },
  }
]

const checkTime = (queue: { endTime: number, item: string; }[]) => {
  const time = new Date().valueOf();
  if (queue.length > 0) {
    if (queue[0].endTime <= time) {
      console.log(`${queue[0].item} completed`);
      queue.pop(); // lvl up                
      // rootStore.userStore.constructBuilding2(0,0)
    }
  }
}

const processQueue = () => {
  blah.forEach((town) => {
    const { hqQueue, stableQueue, barracksQueue } = town;
    console.log(hqQueue);
    checkTime(hqQueue);
  })
}

processQueue();