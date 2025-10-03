import { MapPin } from "lucide-react";
import React from "react";

type UserAddressInfoProps = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export default function UserAddress({ address }: UserAddressInfoProps) {
  return (
    <div className="py-6">
      <p className="text-gray-400 text-sm mb-3">ADDRESS</p>
      <div className="flex flex-row items-baseline gap-1">
        <MapPin size={18} className="text-gray-500" />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${address?.geo?.lat},${address?.geo?.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-gray-900 hover:underline"
        >
          {address?.street}, {address?.suite}
          <br />
          {address?.city}, {address?.zipcode}
        </a>
      </div>
    </div>
  );
}
