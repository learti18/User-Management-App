import React from "react";
import { useForm } from "react-hook-form";
import { UserSchema, type UserFormData } from "../../types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldInput from "../ui/fieldInput";

type UserFormProps = {
  onSubmit: (data: UserFormData) => void;
  defaultValues?: Partial<UserFormData>;
  title?: string;
  description?: string;
};

export default function UserForm({
  onSubmit,
  defaultValues,
  title,
  description,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    defaultValues,
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded border border-neutral-300"
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-neutral-500 mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <FieldInput
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="bg-neutral-100"
          register={register}
          required
          error={errors.name}
        />
        <FieldInput
          label="Email"
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          className="bg-neutral-100"
          register={register}
          required
          error={errors.email}
        />
        <FieldInput
          label="Phone"
          type="tel"
          name="phone"
          placeholder="+1 234 567 890"
          className="bg-neutral-100"
          register={register}
          error={errors.phone}
        />
        <FieldInput
          label="Website"
          type="text"
          name="website"
          placeholder="https://example.com"
          className="bg-neutral-100"
          register={register}
          error={errors.website}
        />
        <FieldInput
          label="Company Name"
          type="text"
          name="company.name"
          placeholder="Example Inc."
          className="bg-neutral-100"
          register={register}
          error={errors.company?.name}
        />
        <FieldInput
          label="City"
          type="text"
          name="address.city"
          placeholder="New York"
          className="bg-neutral-100"
          register={register}
          error={errors.address?.city}
        />
        <FieldInput
          label="Street"
          type="text"
          name="address.street"
          placeholder="123 Main St"
          className="bg-neutral-100"
          register={register}
          error={errors.address?.street}
        />
        <FieldInput
          label="Zipcode"
          type="text"
          name="address.zipcode"
          className="bg-neutral-100"
          placeholder="10001"
          register={register}
          error={errors.address?.zipcode}
        />
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-neutral-800 transition-colors duration-200 cursor-pointer text-white py-2 px-6 rounded mt-6"
      >
        Add User
      </button>
    </form>
  );
}
