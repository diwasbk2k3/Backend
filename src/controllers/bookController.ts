import { Request, Response } from "express";
import { z } from "zod"

export const BookSchema = z.object({
    id: z.string().min(1, "Book ID is required"),
    title: z.string().min(1, "Book Title is required"),
    date: z.string().optional() //Optional
})

export type Book = z.infer<typeof BookSchema> // automatically create type from schema
// schema, more tham type checking - rutime validation
// what define the shape of data, what validates data > book

// Data Transfer Object >> DTO
// How to process request and response data
export const createBookDTO = BookSchema.pick({ id: true, title: true })
export type createBookDTO = z.infer<typeof createBookDTO>

// export type Book = {
//     id: string,
//     title: string,
//     date?: string //Optional
// }

const books: Book[] = [
    {
        id: "B-1",
        title: "1984",
        date: "2022-10-11"
    },
    {
        id: "B-2",
        title: "To Kill a Mocking Bird"
    }
]
export class BookController {
    createBook = (req: Request, res: Response) => {
        const validation = createBookDTO.safeParse(req.body)
        if (!validation.success) {
            return res.status(400).json({ error: validation.error })
        }

        const { id, title } = req.body //destructure
        if (!id) {
            return res.status(400).json({ message: "Book ID is required" })
        }
        if (!title) {
            return res.status(400).json({ message: "Book title is required" })
        }
        const exist = books.find(book => book.id == id)
        if (exist) {
            return res.status(400).json({ message: "Book with this ID already exist" })
        }

        const newBook: Book = { id, title }
        // Same as {id: id, title: title} // variable and key name same
        books.push(newBook)
        return res.status(201).json(newBook)

    }
    getBooks = (req: Request, res: Response) => {
        res.status(200).json(books)
    }
}