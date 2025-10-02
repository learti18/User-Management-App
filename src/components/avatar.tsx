import React from "react";

export default function Avatar({
  name = "",
  className,
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n.charAt(0))
    .join("");

  return (
    <div
      className={`bg-black text-white rounded flex items-center justify-center font-bold aspect-square ${className}`}
    >
      {initials}
    </div>
  );
}
