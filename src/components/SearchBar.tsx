import React from "react";

export default function SearchBar() {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Riot ID"
        className="px-4 py-2 rounded-lg border border-gray-300 text-black"
        style={{ height: "40px" }}
      />
      <input
        type="text"
        placeholder="Tagline"
        className="px-4 py-2 rounded-lg border border-gray-300 text-black"
        style={{ height: "40px" }}
      />
    </div>
  );
}
