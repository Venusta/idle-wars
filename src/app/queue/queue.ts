import { BuildOrder } from "./buildOrder";

interface IQueueItem<T> {
  order: BuildOrder<T>;
  allowParallel: boolean;
}

export class Queue<T> {
  private _enqueued: Array<IQueueItem<T>>;
  private _complete: Array<BuildOrder<T>>;

  public updateQueueItems() {
    for (let index = 0; index < this._enqueued.length; index++) {
      const queueItem = this._enqueued[index];
      if (queueItem.order.isComplete) {
        this._enqueued.splice(index, 1);
        this._complete.push(queueItem.order);
      }
    }
  }

  public claimComplete() {
    const completed = this._complete.map((completedItem) => completedItem.item);
    this._complete = [];

    return completed;
  }

  public enqueueItem(
    item: T,
    durationInSeconds: number,
    allowParallel = false
  ) {
    const buildOrder = new BuildOrder(item, durationInSeconds);
    const queueItem = { order: buildOrder, allowParallel };
    const newLength = this._enqueued.push(queueItem);

    if (newLength === 1 || (newLength > 1 && allowParallel)) {
      this._enqueued[newLength - 1].order.start();
    }
  }

  public getEnqueuedItems() {
    return this._enqueued.map((queueItem) => queueItem.order);
  }
}
