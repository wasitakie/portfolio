import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be at most 255 characters long" }),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters long")
    .max(100, "Subject must be at most 100 characters long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must be at most 1000 characters long"),
});
