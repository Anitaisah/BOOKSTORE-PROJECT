const express = require("express");
const bookRouter = express.Router();
const {AddBookValidationMW, UpdateBookValidationMW} = require("../Validators/books.validators");
// const bookModel = require('../Models/books.models');
const bookControllers = require("../controllers/book.controllers")



bookRouter.get('/', bookControllers.getAllBooks)

bookRouter.get('/:id', bookControllers.getBookByID)

bookRouter.post('/', AddBookValidationMW, bookControllers.addBook)

bookRouter.put('/:id', UpdateBookValidationMW, bookControllers.upDateBookByID)

bookRouter.delete('/:id', bookControllers.deleteBookByID)


module.exports =  bookRouter
    



