import React from 'react'
import * as style from './style.css';
import { useStores } from '../../stores/appContext'
import { observer } from 'mobx-react';

export const ResourceDisplay = observer(() => {
  const { resources: { timber, clay, iron, storageCapacity, population, maxPopulation } } = useStores().userStore.towns[0]

  return (
    <div>
      <table className="Buildings">
        <tbody>
          <tr>
            <td>{timber}</td>
            <td>{clay}</td>
            <td>{iron}</td>
            <td>{storageCapacity}</td>
            <td>{`${population}/${maxPopulation}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})
