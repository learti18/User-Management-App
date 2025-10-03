import { Globe, Mail, Phone } from "lucide-react";
import React from "react";

type UserContactInfoProps = {
  email: string;
  phone: string;
  website: string;
};

export default function UserContact({
  email,
  phone,
  website,
}: UserContactInfoProps) {
  return (
    <div className="border-y border-gray-300 mt-4 py-6">
      <p className="text-gray-400 text-sm mb-3">CONTACT</p>
      <div className="flex flex-col items-start gap-2 font-medium text-lg">
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-900 hover:underline"
        >
          <Mail size={18} className="text-gray-500" /> {email}
        </a>
        <a
          href={`tel:${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-900 hover:underline"
        >
          <Phone size={18} className="text-gray-500" /> {phone}
        </a>
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-900 hover:underline"
        >
          <Globe size={18} className="text-gray-500" /> {website}
        </a>
      </div>
    </div>
  );
}
