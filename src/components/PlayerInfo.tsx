import React from "react";

export default function PlayerInfo() {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="relative flex items-center mr-4">
        <img
          src="https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/3184.png"
          alt="Player Icon"
          className="w-24 h-24 rounded-lg" // Adjust size as needed
        />
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-l">
          1086
        </span>
      </div>
      <div className="text-xl font-semibold text-center">
        LongestUserNamee#44444
      </div>
    </div>
  );
}
