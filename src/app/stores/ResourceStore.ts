import { ResourceModel } from 'app/models';
import { useLocalStore } from 'mobx-react';


enum ResourceType {
  Timber = 0,
  Clay = 1,
  Iron = 2,
  Population = 3
}

type ResourcePayload = Array<{
  type: ResourceType
  amount: number
}>

export type ResourceStore = ReturnType<typeof useResourceStore>;
export const useResourceStore = (defaultResources: ResourceModel) => {
  const store = useLocalStore(() => ({
    resources: defaultResources,
    addResource(payload: ResourcePayload): void {
      payload.forEach((resource) => {
        switch(resource.type) {
          case ResourceType.Timber:
            store.resources.timber += resource.amount
            break;
          case ResourceType.Clay:
            store.resources.clay += resource.amount
            break;
          case ResourceType.Iron:
            store.resources.iron += resource.amount
            break;
          case ResourceType.Population:
            store.resources.population += resource.amount
            break;
          default:
            console.error(`Unexpected resource type in addResources: ${resource.type}`)
        }
      })
    },
    addResources(payload: ResourcePayload): void {
      payload.forEach((resource) => {
        console.log("yeeeeet");
        console.log(resource);
        
      })
    },
    removeResources(payload: ResourcePayload): void {
      payload.forEach((resource) => {
        switch(resource.type) {
          case ResourceType.Timber:
            store.resources.timber -= resource.amount
            break;
          case ResourceType.Clay:
            store.resources.clay -= resource.amount
            break;
          case ResourceType.Iron:
            store.resources.iron -= resource.amount
            break;
          case ResourceType.Population:
            store.resources.population -= resource.amount
            break;
          default:
            console.error(`Unexpected resource type in removeResources: ${resource.type}`)
        }
      })
    }
  }));
  return store;
};
