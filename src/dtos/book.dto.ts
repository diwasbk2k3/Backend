import {z} from "zod"
import { BookSchema } from "../types/book.type"

// Data Transfer Object >> DTO
// How to process request and response data
export const createBookDTO = BookSchema.pick({ id: true, title: true })
export type createBookDTO = z.infer<typeof createBookDTO>