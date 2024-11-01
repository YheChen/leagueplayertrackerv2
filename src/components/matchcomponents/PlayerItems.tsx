import React from "react";

export default function PlayerItems({ playerData }) {
  return (
    <div className="items">
      <ul className="flex space-x-1 p-0 m-0">
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item0 > 0 ? playerData.item0 : 7050
            }.png`}
            width="30"
            height="30"
            className="rounded bg-gray-800"
          />
        </li>
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item1 > 0 ? playerData.item1 : 7050
            }.png`}
            width="30"
            height="30"
            className="rounded bg-gray-800"
          />
        </li>
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item2 > 0 ? playerData.item2 : 7050
            }.png`}
            width="30"
            height="30"
            className="rounded bg-gray-800"
          />
        </li>
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item3 > 0 ? playerData.item3 : 7050
            }.png`}
            width="30"
            height="30"
            className="rounded bg-gray-800"
          />
        </li>
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item4 > 0 ? playerData.item4 : 7050
            }.png`}
            width="30"
            height="30"
            className="rounded bg-gray-800"
          />
        </li>
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item5 != 0 ? playerData.item5 : 7050
            }.png`}
            width="30"
            height="30"
            className="rounded bg-gray-800"
          />
        </li>
        <li className="inline-block">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${
              playerData.item6 != 0 ? playerData.item6 : 7050
            }.png`}
            className="rounded-full"
            width="30"
            height="30"
          />
        </li>
      </ul>
    </div>
  );
}
