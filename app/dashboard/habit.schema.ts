import { z } from "zod";

export const habitSchema = z.object({
    name: z.string().min(2).max(100),
    frequency: z.string().min(2).max(100),
});

export type HabitSchema = z.infer<typeof habitSchema>;
                        