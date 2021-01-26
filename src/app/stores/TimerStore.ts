import { observable, IAtom } from "mobx"
import { createAtom, autorun } from "mobx"
import { RootStore } from "./RootStore"

export class TimerStore {
  private readonly root: RootStore;
  @observable public time: number;

  atom: IAtom
  intervalHandler = null
  currentDateTime: Date

  constructor(root: RootStore) {
    this.root = root;

      // Creates an atom to interact with the MobX core algorithm.
      this.atom = createAtom(
          // 1st parameter:
          // - Atom's name, for debugging purposes.
          "Clock",
          // 2nd (optional) parameter:
          // - Callback for when this atom transitions from unobserved to observed.
          () => this.startTicking(),
          // 3rd (optional) parameter:
          // - Callback for when this atom transitions from observed to unobserved.
          () => this.stopTicking()
          //The same atom transitions between these two states multiple times.
      )
  }

  getTime() {
      // Let MobX know this observable data source has been used.
      //
      // reportObserved will return true if the atom is currently being observed
      // by some reaction. If needed, it will also trigger the startTicking
      // onBecomeObserved event handler.
      if (this.atom.reportObserved()) {
          return this.currentDateTime
      } else {
          // getTime was called, but not while a reaction was running, hence
          // nobody depends on this value, and the startTicking onBecomeObserved
          // handler won't be fired.
          //
          // Depending on the nature of your atom it might behave differently
          // in such circumstances, like throwing an error, returning a default
          // value, etc.
          return new Date()
      }
  }

  tick() {
      this.currentDateTime = new Date()
      this.atom.reportChanged() // Let MobX know that this data source has changed.     
  }

  startTicking() {
      this.tick() // Initial tick.
      this.intervalHandler = setInterval(() => this.tick(), 1000);
      
  }

  stopTicking() {
      clearInterval(this.intervalHandler)
      this.intervalHandler = null
  }
}