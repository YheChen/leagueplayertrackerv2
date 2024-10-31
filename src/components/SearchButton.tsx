import React from "react";

interface ButtonProps {
  text: string;
  //   onClick: () => void;
}

export default function SearchButton({ text }: ButtonProps) {
  //{ text, onClick }
  return (
    <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded ml-2">
      {text}
    </button>
  );
}
