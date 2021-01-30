import { addMilliseconds, isAfter, differenceInMilliseconds } from "date-fns";
import { Building } from "../game/buildings/base/building";
import { Unit } from "../game/units/base/unit"

export class QueueItem {
  public readonly item: Building | Unit;
  public readonly totalDuration: number;
  private startTime!: Date;
  private endTime!: Date;

  public get isComplete() {
    if (this.startTime === undefined || this.endTime === undefined) {
      return false;
    }

    return isAfter(new Date(), this.endTime);
  }

  public get progress() {
    if (this.endTime === undefined) {
      return this.totalDuration;
    }

    if (this.isComplete) {
      return 0;
    }

    const currentDuration = differenceInMilliseconds(this.endTime, new Date());

    return this.totalDuration - currentDuration;
  }

  public get completionTime() {
    return this.endTime;
  }

  public constructor(item: Building | Unit, durationInMilliseconds: number) {
    this.item = item;
    this.totalDuration = durationInMilliseconds;
  }

  public start() {
    this.startTime = new Date();
    this.endTime = addMilliseconds(new Date(), this.totalDuration);
  }
}
