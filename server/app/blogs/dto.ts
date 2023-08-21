import { z } from "zod";

export const postSchema = z.object({
    image: z.string(),
    title: z.string(),
    excerpt: z.string(),
    caption: z.string()
}).strict()

export type Post = z.infer<typeof postSchema>