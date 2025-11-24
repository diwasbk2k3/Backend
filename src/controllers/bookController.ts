import { Request, Response } from "express";
import { z } from "zod"
import { BookService } from "../services/book.services";
import { createBookDTO } from "../dtos/book.dto";
import { Book } from "../types/book.type";


let bookService = new BookService
// schema, more tham type checking - rutime validation
// what define the shape of data, what validates data > book



// export type Book = {
//     id: string,
//     title: string,
//     date?: string //Optional
// }


export class BookController {
    createBook = (req: Request, res: Response) => {
        try{
            const validation = createBookDTO.safeParse(req.body)
        if (!validation.success) {
            return res.status(400).json({ error: validation.error })
        }

        const { id, title } = req.body //destructure
        const newBook: Book = bookService.createBook({ id, title })
        return res.status(201).json(newBook)
        }catch(err){
            res.status(400).json({err})
        }

    }
    getBooks = (req: Request, res: Response) => {
        try{
            let response = bookService.getAllBooks()
        res.status(200).json(response)
        }catch(err){
            res.status(400).json({err})
        }
    }
}