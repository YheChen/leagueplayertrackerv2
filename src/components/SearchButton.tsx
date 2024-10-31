import React from "react";

interface ButtonProps {
  text: string;
  //   onClick: () => void;
}

export default function SearchButton({ text }: ButtonProps) {
  //{ text, onClick }
  return (
    <button className="px-3 py-2 bg-white text-blue-500 text-sm rounded ml-2">
      {text}
    </button>
  );
}
