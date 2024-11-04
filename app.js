const express = require("express");
const bodyParser = require("body-parser")
const CONFIG = require("./config/config") //acess to enviroment variables

//Routes
const bookRouter = require("./routers/books.route")
const authorRouter = require("./routers/authors.route")

const connectToDb = require("./db/mongodb")

const app = express()


// Connect to Mongodb Database
connectToDb


//Add Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/api/v1/books", bookRouter)
app.use("/api/v1/authors", authorRouter)



app.get("/", (req, res) => {
    res.send("Hello Bookstore")
})


//Error handler middleware
app.use((err, req, res, next) => {
    // logger.error(err.message)
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})



//Starting server
app.listen(CONFIG.PORT,() => {
    console.log(`Server started on http://localhost:${CONFIG.PORT}`)
})