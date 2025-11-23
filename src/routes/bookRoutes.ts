import { Router, Request, Response } from "express"
import { BookController } from "../controllers/bookController.js"

const bookRouter: Router = Router()

const bookController = new BookController()

bookRouter.get("/", bookController.getBooks)

export default bookRouter