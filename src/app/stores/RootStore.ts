import { UserStore } from './UserStore';

export class RootStore {
  public userStore: UserStore;

  public constructor() {
    this.userStore = new UserStore(this);
  }
}
