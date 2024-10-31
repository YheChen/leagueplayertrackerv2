import React, { ChangeEvent, useState, useEffect } from "react";

interface SearchBarProps {
  onChange: (name: string, tagline: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    const [name, tagline] = inputValue.split("#");
    if (name && tagline) {
      onChange(name, tagline);
    }
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Riot ID + #Tagline"
        value={value}
        onChange={handleChange}
        className="px-4 py-2 rounded-lg border border-gray-300 text-black"
        style={{ height: "40px", width: "400px" }}
      />
    </div>
  );
}
