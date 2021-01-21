import { observable } from 'mobx';

export class ResourceModel {
  readonly townId: number;
  @observable public timber: number;
  @observable public clay: number;
  @observable public iron: number;
  @observable public storageCapacity: number;
  @observable public population: number;
  @observable public maxPopulation: number;

  constructor(townId: number, timber: number = 500, clay: number = 500, iron: number = 500, storageCapacity: number = 1500, population: number = 0, maxPopulation: number = 50) {
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
