import React from "react";
import Image from "next/image";

export default function PlayerRankData() {
  return (
    <div className="bg-white text-white p-4 rounded-lg border-black shadow-lg w-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-black text-lg font-semibold">Ranked Solo/Duo</h3>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/MASTER.png"
          alt="Master Rank"
          width={50}
          height={50}
          className="mr-4"
        />
        <div>
          <h4 className="text-2xl text-black font-bold">Grandmaster</h4>
          <p className="text-black">100 LP</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-black">888W 888L</p>
          <p className="text-black">40% Winrate</p>
        </div>
      </div>
    </div>
  );
}
