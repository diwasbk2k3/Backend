import { Book } from "../types/book.type"

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

export interface IBookRepository {
    getOneBook(id: string): Book | undefined; 
    createBook(book: { id: string; title: string; date?: string | undefined }): Book 
    getAllBooks(): Book[]
}


export class BookRepository implements IBookRepository {
    getAllBooks(): Book[] {
        return books
    }
    getOneBook(id: string): Book | undefined {
        return books.find((book) => 
            book.id == id
        )
    }
    createBook(book: Book): Book {
        books.push(book)
        return book
    }
}