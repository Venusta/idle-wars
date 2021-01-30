import { addMilliseconds, isAfter, differenceInMilliseconds } from "date-fns";

export class BuildOrder<T> {
  public readonly item: T;
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
      return 0;
    }

    if (this.isComplete) {
      return 1;
    }

    const currentDuration = differenceInMilliseconds(this.endTime, new Date());

    return this.totalDuration / currentDuration;
  }

  public constructor(item: T, durationInMilliseconds: number) {
    this.item = item;
    this.totalDuration = durationInMilliseconds;
  }

  public start() {
    this.startTime = new Date();
    this.endTime = addMilliseconds(new Date(), this.totalDuration);
  }
}
