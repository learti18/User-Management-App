import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/user";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import BackButton from "../components/ui/backButton";
import UserDetailHeader from "../components/userDetails/userDetailHeader";
import UserContact from "../components/userDetails/userContact";
import UserAddress from "../components/userDetails/userAddress";
import UserCompany from "../components/userDetails/userCompany";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) =>
    state.users.items.find((u: User) => u.id === Number(id))
  );

  return (
    <div className="bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <BackButton onClick={() => navigate(-1)} className="mb-6" />
        {user ? (
          <div>
            <div className="flex flex-col bg-white text-gray-900 p-8 rounded border border-gray-300">
              {/* Header */}
              <UserDetailHeader
                name={user.name}
                companyName={user.company?.name}
              />
              {/* Contact info */}
              <UserContact
                email={user.email}
                phone={user.phone}
                website={user.website}
              />
              {/* Address */}
              <UserAddress address={user.address} />
              {/* Company */}
              <UserCompany company={user.company} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="text-gray-600 text-2xl">User not found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
