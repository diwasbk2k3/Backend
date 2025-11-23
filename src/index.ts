import express, { Application, Request, Response } from "express"
import bodyParser from "body-parser"
import bookRouter from "./routes/bookRoutes.js";

const app: Application = express()
const PORT: number = 4200;

app.use(bodyParser.json())
app.use("/api/books", bookRouter)

app.listen(PORT, () => {
    console.log(`Server: http://localhost: ${PORT}`)
})