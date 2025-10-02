import z from "zod";

export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
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
  phone: string;
  website: string;
}

export const UserSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  website: z.string().min(1, "Website is required"),
});

export type UserFormData = z.infer<typeof UserSchema>;
