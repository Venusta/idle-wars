import React from 'react'
import * as style from './style.css';
import { BuildingModel } from '../../models'
import { useBuildingsStore } from '../../stores/BuildingsStore'
import { observer } from 'mobx-react';

const defaultBuildings = [
  new BuildingModel(0, 0, 0),
  new BuildingModel(1, 0, 0),
  new BuildingModel(2, 0, 0),
  new BuildingModel(3, 0 ,0)
]

export const BuildingTable = observer(() => {
  const buildingStore = useBuildingsStore(defaultBuildings)
  const tableRows = []
  buildingStore.buildings.forEach((building) => {
    tableRows.push(<BuildingTableRow buildingLevel={building.level} buildingType={building.buildingType} changeLevel={buildingStore.changeLevelBuilding} />)
  });

  return (
    <div>
      <table className="Buildings">
        <tbody>
          <tr>
            <th style={{ width: "23%" }}>Buildings</th>
            <th colSpan={5}>Requirements</th>
            <th style={{ width: "30%" }}>Construct</th>
          </tr>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
})

const buildingNames = {
  0: "Headquartes",
  1: "Timber camp",
  2: "Clay pit",
  3: "Iron mine"
}

const buildingCosts = [
  { timber: 7, clay: 5, iron: 2, population: 2, constructionTime: 50 },
  { timber: 17, clay: 15, iron: 12, population: 2, constructionTime: 60 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
  { timber: 27, clay: 25, iron: 22, population: 2, constructionTime: 70 },
]

interface BuildingTableRowProps {
  buildingLevel: number,
  buildingType: number,
  changeLevel
}

const BuildingTableRow = ({ buildingLevel, buildingType, changeLevel }: BuildingTableRowProps) => {

  const { timber, clay, iron, population, constructionTime } = buildingCosts[buildingLevel]

  const formattedTime = new Date(constructionTime * 1000).toISOString().substr(11, 8)

  return (
    <tr>
      <td>
        <img src="https://dsuk.innogamescdn.com/asset/ee33fc3d/graphic/buildings/mid/main1.png" title="Headquarters" alt="" className="bmain_list_img" />
        <a href="/game.php?village=3955&amp;screen=main">{buildingNames[buildingType]}</a>
        <span style={{ fontSize: "0.9em" }}>Level {buildingLevel}</span>
      </td>
      <td>{timber}</td>
      <td>{clay}</td>
      <td>{iron}</td>
      <td>{formattedTime}</td>
      <td>{population}</td>
      <td><button onClick={() => changeLevel(buildingType, 0, 1)}>Construct</button></td>
    </tr>
  )
}

