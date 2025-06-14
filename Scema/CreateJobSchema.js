import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string({ required_error: "Name is required!" })
    .min(2, "Name must be at least 2 characters"),
  category: z.string({ required_error: "Category is required!" }),
  deadline: z.date({ required_error: "Deadline is required!" }),
  vacancy: z.coerce.number().nonnegative().optional(),
  experience: z.coerce.number().nonnegative().optional(),
});
