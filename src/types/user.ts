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
  phone: z.string().optional(),
  website: z.string().optional(),
  company: z
    .object({
      name: z.string().optional(),
    })
    .optional(),
  address: z
    .object({
      street: z.string().optional(),
      suite: z.string().optional(),
      city: z.string().optional(),
      zipcode: z.string().optional(),
    })
    .optional(),
});

export type UserFormData = z.infer<typeof UserSchema>;
