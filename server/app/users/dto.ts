import { z } from "zod";

export const userSchema = z.object({
    userName: z.string(),
    password: z.string(),
    rePassword: z.string(),
    role: z.string()
}).strict()


export type User = z.infer<typeof userSchema>
