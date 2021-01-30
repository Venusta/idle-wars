import React, { useRef } from 'react'
import * as style from './style.css';
import { useStores } from '../../stores/appContext'
import { observer } from 'mobx-react';
import { BuildingTableRow } from './BuildingTableRow';

export const BuildingTable = observer(() => {
  const { userStore } = useStores();

  const renderRows = () => {
    return userStore.towns[0].buildings.map((building) => (
      <BuildingTableRow
        buildingType={building.type}
        townId={0}
      />
    ));
  }

  return (
    <div>
      <table className="Buildings">
        <tbody>
          <tr>
            <th style={{ width: "23%" }}>Buildings</th>
            <th colSpan={5}>Requirements</th>
            <th style={{ width: "30%" }}>Construct</th>
          </tr>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
});
