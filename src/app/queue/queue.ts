import { action, observable } from 'mobx';
import { QueueItem } from "./queueItem";
import { QueueManager } from "./queueManager";
import { Building } from "../game/buildings/base/building";
import { Unit } from "../game/units/base/unit";
import { QueueType } from "../game/types";


export class Queue {
  @observable private _enqueued: Array<QueueItem>;
  private _complete: Array<QueueItem>;
  private slots: number;
  public type: QueueType;

  constructor(queueManager: QueueManager, type: QueueType, slots: number = 2) {
    queueManager.register(this);
    this.type = type;
    this.slots = slots;
    this._enqueued = [];
    this._complete = [];
  }

  public updateQueueItems() {
    for (let index = 0; index < this._enqueued.length; index++) {
      const queueItem = this._enqueued[index];
      if (queueItem.isComplete) {
        this._enqueued.splice(index, 1);
        this._complete.push(queueItem);
        const queueLength = this._enqueued.length;
        if (queueLength > 0) {
          this._enqueued[queueLength - 1].start();
        }
      }
    }
  }

  public claimComplete() {
    const completed = this._complete.map((completedItem) => completedItem.item);
    this._complete = [];

    return completed;
  }

  public enqueueItem(
    item: Building | Unit,
    durationInSeconds: number
  ) {
    const queueItem = new QueueItem(item, durationInSeconds * 1000);
    const newLength = this._enqueued.push(queueItem);

    if (newLength === 1) {
      this._enqueued[newLength - 1].start();
    }
    console.log(`Queued item: ${item.name}. Finishes in ${durationInSeconds} seconds.`);    
  }

  public getEnqueuedItems() {
    return this._enqueued;
  }

  public get isFull() {
    return this._enqueued.length >= this.slots;
  }
}
