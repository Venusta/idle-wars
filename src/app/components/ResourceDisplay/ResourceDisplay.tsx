import React from 'react'
import * as style from './style.css';
import { useStores } from '../../stores/appContext'
import { observer } from 'mobx-react';
import { BuildingType } from "app/game/types";
import { Farm, Warehouse } from 'app/game/buildings';

export const ResourceDisplay = observer(({ townId }: { townId: number }) => {
  const town = useStores().userStore.towns[townId];
  const {  timber, clay, iron, population } = town.resources;
  const farm = town.getBuilding(BuildingType.Farm) as Farm;
  const warehouse = town.getBuilding(BuildingType.Warehouse) as Warehouse;

  return (
    <div>
      <table className="Buildings">
        <tbody>
          <tr>
            <td>{timber}</td>
            <td>{clay}</td>
            <td>{iron}</td>
            <td>{Math.round(warehouse.getStorageCapacity())}</td>
            <td>{`${population}/${Math.round(farm.getMaxPopulation())}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})
