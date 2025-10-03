import React from "react";

type DropDownProps = {
  options: { label: string; value: string }[];
  defaultValue?: string;
  name: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function DropDown({
  options,
  defaultValue,
  name,
  onChange,
}: DropDownProps) {
  return (
    <div className="relative min-w-0 w-full sm:w-auto">
      <select
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => onChange && onChange(e)}
        className="appearance-none border border-gray-300 rounded bg-white py-2 pl-3 pr-8 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
        </svg>
      </div>
    </div>
  );
}
