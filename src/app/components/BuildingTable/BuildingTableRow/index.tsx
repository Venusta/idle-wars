import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../../stores/appContext'
import { BuildingType } from "../../../game/types"

interface BuildingTableRowProps {
  townId: number;
  buildingType: number;
}

export const BuildingTableRow: React.FC<BuildingTableRowProps> = observer(({ townId, buildingType}) => {
  const { userStore } = useStores();

  const town = userStore.towns[townId]
  const building = town.getBuilding(buildingType)
  const headQuarters = town.getBuilding(BuildingType.Headquarters)

  const buildTime = building.getBuildTime(headQuarters.level)
  const formattedBuildTime = new Date(buildTime * 1000).toISOString().substr(11, 8)

  const { timber, clay, iron, population } = building.getCost()

  return (
    <tr>
      <td>
        <img src="https://dsuk.innogamescdn.com/asset/ee33fc3d/graphic/buildings/mid/main1.png" title="Headquarters" alt="" className="bmain_list_img" />
        <a href="/game.php?village=3955&amp;screen=main">{building.name}</a>
        <span style={{ fontSize: "0.9em" }}>Level {building.level}</span>
      </td>
      <td>{Math.round(timber)}</td>
      <td>{Math.round(clay)}</td>
      <td>{Math.round(iron)}</td>
      <td>{formattedBuildTime}</td>
      <td>{Math.round(-population)}</td>
      <td><button onClick={() => town.constructBuilding(buildingType)}>Construct</button></td>
    </tr>
  );
});