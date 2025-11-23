import { Router, Request, Response } from "express"

const bookRouter: Router = Router()

bookRouter.get("/", (req: Request, res: Response) => {
    const books = [
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
    res.send({
        message: "Books",
        result: books
    })
})

export default bookRouter