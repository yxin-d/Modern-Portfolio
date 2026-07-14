import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Give it a short subject."),
  message: z.string().trim().min(20, "Say a little more (20 characters minimum)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
