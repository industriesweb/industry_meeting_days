import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom  doit contenir au moins 2 caractères")
    .max(100, "Le prénom  est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom contient des caractères invalides"),
  lastName: z
    .string()
    .min(2, "Le prénom  doit contenir au moins 2 caractères")
    .max(100, "Le prénom  est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom contient des caractères invalides"),

  // Zod v4: use top-level z.email() instead of z.string().email()
  email: z.email("Email invalide").max(100, "Email trop long"),

  phone: z
    .string()
    .min(6, "Numéro de téléphone trop court")
    .max(20, "Numéro de téléphone trop long")
    .regex(/^[0-9+\s()-]+$/, "Numéro de téléphone invalide"),



contactMessage: z
  .string()
  .min(10, "Le message doit contenir au moins 10 caractères")
  .max(3000, "Le message est trop long"),
});

export type ContactFieldsTypes = z.infer<typeof ContactSchema>;