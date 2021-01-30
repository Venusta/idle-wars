import { Queue } from "./queue";
import { Building } from "app/game/buildings/base/building"
import { Unit } from "app/game/units/base/unit"

export class QueueManager {
  private queues: Array<Queue> = [];

  public register(queue: Queue) {
    this.queues.push(queue);
  }

  public update() {
    for (let index = 0; index < this.queues.length; index++) {
      const queue = this.queues[index];
      queue.updateQueueItems();
      const completeItems = queue.claimComplete();
      
      completeItems.forEach((item) => {
        if (item instanceof Building) {
          item.levelUp();
        } else if (item instanceof Unit) {

        } else {
          console.error(`Unexpected item in queue with type: ${typeof item}.`)
          return;
        }
      });
      
      // check if Unit, Building or Research array and then handle each of those
    }
  }
}
