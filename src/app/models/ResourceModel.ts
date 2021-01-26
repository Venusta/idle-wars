import { observable } from 'mobx';

export class ResourceModel {
  readonly townId: number;
  @observable public timber: number;
  @observable public clay: number;
  @observable public iron: number;
  @observable public storageCapacity: number;
  @observable public population: number;
  @observable public maxPopulation: number;

  constructor(townId: number, timber = 500, clay = 500, iron = 500, storageCapacity = 1500, population = 0, maxPopulation = 50) {
    this.townId = townId;
    this.timber = timber;
    this.clay = clay;
    this.iron = iron;
    this.storageCapacity = storageCapacity;
    this.population = population;
    this.maxPopulation = maxPopulation;
  }
}

export default ResourceModel;
