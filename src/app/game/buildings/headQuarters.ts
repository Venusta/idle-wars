import { action, observable } from 'mobx';
import { Queue } from "app/queue/queue";
import { QueueManager } from "app/queue/queueManager";
import { BuildingType, QueueType } from "../types";
import { ProductionBuilding } from "./base/productionBuilding";
import { Building } from "./base/building"

export class HeadQuarters extends ProductionBuilding {
  @observable public queue: Queue;

  constructor(queueManager: QueueManager) {
    super(
        {
          type: BuildingType.Headquarters, 
          baseCost: {
            timber: 90,
            clay: 80,
            iron: 70,
            population: 5
          }, 
          baseTime: 300, 
          maxLevel: 30,
          creates: {
            buildings: [
              BuildingType.Academy,
              BuildingType.Barracks,
              BuildingType.ClayPit,
              BuildingType.Farm,
              BuildingType.Headquarters,
              BuildingType.HidingPlace,
              BuildingType.IronMine,
              BuildingType.Market,
              BuildingType.RallyPoint,
              BuildingType.Smithy,
              BuildingType.Stable,
              BuildingType.Statue,
              BuildingType.TimberCamp,
              BuildingType.Wall,
              BuildingType.Warehouse,
              BuildingType.Workshop
            ]
          }
        }
      )
    this.queue = new Queue(queueManager, QueueType.Buildings);
  }

  @action
  queueBuilding(building: Building): void {
    this.queue.enqueueItem(building, building.getBuildTime(this.level))
  }
}