import React, { ChangeEvent, KeyboardEvent, useState } from "react";

interface SearchBarProps {
  onChange: (name: string, tagline: string) => void;
  onEnterPress: () => void; // New prop to trigger search on Enter
}

export default function SearchBar({ onChange, onEnterPress }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    const [name, tagline] = inputValue
      .split("#")
      .map((part) => part?.trim() || "");
    onChange(name || "", tagline || "");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnterPress(); // Trigger the search when Enter is pressed
    }
  };

  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Riot ID + #Tagline"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Handle Enter key press
        className="px-4 py-2 rounded-lg border border-gray-300 text-black w-full"
        style={{ height: "40px" }}
      />
    </div>
  );
}
