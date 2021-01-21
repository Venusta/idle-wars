import React from 'react'
import * as style from './style.css';
import { ResourceModel } from '../../models'
import { useResourceStore } from '../../stores/ResourceStore'
import { observer } from 'mobx-react';

const defaultResources = new ResourceModel(0)

export const ResourceDisplay = observer(() => {
  const { resources } = useResourceStore(defaultResources)

  return (
    <div>
      <table className="Buildings">
        <tbody>
          <tr>
            <td>{resources.timber}</td>
            <td>{resources.clay}</td>
            <td>{resources.iron}</td>
            <td>{resources.storageCapacity}</td>
            <td>{`${resources.population}/${resources.maxPopulation}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})
