import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name must be less than 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
  subject: z
    .string()
    .trim()
    .min(2, "Please enter a subject.")
    .max(150, "Subject must be less than 150 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Please write a message of at least 10 characters.")
    .max(1000, "Message must be less than 1000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
