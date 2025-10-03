import { ArrowLeft } from "lucide-react";
import React from "react";

export default function BackButton({
  onClick,
  text = "Back",
  className = "",
}: {
  onClick?: () => void;
  text?: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={` text-black hover:text-gray-600 transition-colors duration-200 flex items-center cursor-pointer group transition-all duration-300 ${className}`}
    >
      <ArrowLeft className="inline-block mr-1 group-hover:-translate-x-1" />{" "}
      {text}
    </button>
  );
}
