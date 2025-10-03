import React from "react";
import Avatar from "../avatar";

type UserProfileHeaderProps = {
  name: string;
  companyName?: string;
};
export default function UserDetailHeader({
  name,
  companyName,
}: UserProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4 pb-6">
      <Avatar name={name} className="size-14 md:size-20 text-3xl" />
      <div>
        <h2 className="text-4xl font-bold leading-none">{name}</h2>
        <p className="text-gray-600">{companyName}</p>
      </div>
    </div>
  );
}
