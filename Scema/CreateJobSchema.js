import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string({ required_error: "Name is required!" })
    .min(2, "Name must be at least 2 characters"),
  category: z.string({ required_error: "Category is required!" }),
  // .nonempty("Title is required!"),
  // category: z.string().nonempty("Category is required"),
});
