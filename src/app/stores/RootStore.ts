import { autorun } from 'mobx';
import { TimerStore } from './TimerStore';
import { UserStore } from './UserStore';

export class RootStore {
  public userStore: UserStore;
  public timerStore: TimerStore;

  public constructor() {
    this.userStore = new UserStore(this);
    this.timerStore = new TimerStore(this);
    // const disposer = autorun(() => {
    //   return console.log(this.timerStore.getTime());
    // })
    // disposer();
  }
}
