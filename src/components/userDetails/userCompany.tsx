import React from "react";

type UserCompanyProps = {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function UserCompany({ company }: UserCompanyProps) {
  return (
    <div className="border-t border-gray-300 pt-6">
      <p className="text-gray-400 text-sm mb-3">COMPANY</p>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
        <span className="text-gray-600">{company.catchPhrase}</span>
        <span className="text-gray-600">{company.bs}</span>
      </div>
    </div>
  );
}
