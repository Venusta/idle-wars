import React from 'react'
import * as style from './style.css';
import { useStores } from '../../stores/appContext'
import { observer } from 'mobx-react';
import { Queue } from 'app/queue/queue';
import { BuildingType, QueueType } from 'app/game/types';
import { Building } from 'app/game/buildings/base/building';
import { HeadQuarters } from 'app/game/buildings';

export const QueueDisplay = observer(({ townId }: { townId: number }) => {
  const userStore = useStores().userStore;
  const town = userStore.towns[townId];
  const headquarters = town.getBuilding(BuildingType.Headquarters) as HeadQuarters
  const queue = headquarters.queue
  
  const renderBuildingQueue = () => {
    const titleRow = (
      <tr>
        <th>Construction</th>
        <th>Duration</th>
        <th>Completion</th>
        <th>Cancellation</th>
      </tr>
    )
    const queueRows = queue.getEnqueuedItems().map((queueItem) => {
      const building = queueItem.item as Building;
      const remainingTime = new Date(queueItem.progress * 1000).toISOString().substr(11, 8);
      let completionTime = "-";
      if (queueItem.completionTime !== undefined) {
        completionTime = queueItem.completionTime.toISOString().substr(11, 8);
      }
      return (
        <tr>
          <td>
            <img src="https://dsuk.innogamescdn.com/asset/ee33fc3d/graphic/buildings/mid/main1.png" title="Headquarters" alt="" className="bmain_list_img" />
            <a href="/game.php?village=3955&amp;screen=main">{building.name}</a>
            <span style={{ fontSize: "0.9em" }}>Level {building.level + 1}</span>
          </td>
          <td>{remainingTime}</td>
          <td>{completionTime}</td>
          <td><button onClick={() => {}}>Cancel</button></td>
        </tr>
      )
    });    

    return [ titleRow, ...queueRows];
  }
  console.log(queue.type);
  
  if (queue.type === QueueType.Buildings) {    
    return (
      <div>
        <table className="Queue">
          <tbody>
            {renderBuildingQueue()}
          </tbody>
        </table>
      </div>
    )
  }

  return <div></div>;
})
