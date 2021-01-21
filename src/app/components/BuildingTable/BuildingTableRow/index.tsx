import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../../stores/appContext'

export const buildingData = [
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -3 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 555, iron: 2, population: -5 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -12 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -52 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
  { cost: { timber: 7, clay: 5, iron: 2, population: -2 }, constructionTime: 50 },
]

const buildingNames = {
  0: "Headquartes",
  1: "Timber camp",
  2: "Clay pit",
  3: "Iron mine"
}

interface BuildingTableRowProps {
  level: number;
  type: number;
  townId: number;
}

export const BuildingTableRow: React.FC<BuildingTableRowProps> = observer((props) => {
  const { userStore } = useStores();

  const { cost: { timber, clay, iron, population }, constructionTime } = buildingData[props.level];
  const formattedTime = new Date(constructionTime * 1000).toISOString().substr(11, 8)

  return (
    <tr>
      <td>
        <img src="https://dsuk.innogamescdn.com/asset/ee33fc3d/graphic/buildings/mid/main1.png" title="Headquarters" alt="" className="bmain_list_img" />
        <a href="/game.php?village=3955&amp;screen=main">{buildingNames[props.type]}</a>
        <span style={{ fontSize: "0.9em" }}>Level {props.level}</span>
      </td>
      <td>{timber}</td>
      <td>{clay}</td>
      <td>{iron}</td>
      <td>{formattedTime}</td>
      <td>{-population}</td>
      <td><button onClick={() => userStore.constructBuilding(props.type, props.townId)}>Construct</button></td>
    </tr>
  );
});