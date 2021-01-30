import { observable, action } from "mobx"
import { Town } from 'app/game/town';
import { RootStore } from "./RootStore"

export class UserStore {
  private readonly root: RootStore;
  @observable public towns: Town[]

  constructor(root: RootStore) {
    this.root = root;
    this.towns = [new Town(0)]
  }
}
