import { z } from "zod"

export const BookSchema = z.object({
    id: z.string().min(1, "Book ID is required"),
    title: z.string().min(1, "Book Title is required"),
    date: z.string().optional() //Optional
})

export type Book = z.infer<typeof BookSchema> // automatically create type from schema