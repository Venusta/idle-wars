import { Queue } from "./queue";
import { Building } from "../game/buildings/base/building";

export class QueueManager {
  private buildingsQueue: Queue<Building> = new Queue();

  public enqueueBuilding(building: Building) {
    this.buildingsQueue.enqueueItem(building, 1000);
  }

  public update() {
    this.buildingsQueue.updateQueueItems();
    const completeBuildings = this.buildingsQueue.claimComplete();
    // completeBuildings.map((building) => building.constructBuilding())
  }
}
