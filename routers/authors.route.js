const express = require('express')
const { AddAuthorValidationMW, UpdateAuthorValidationMW } = require("../Validators/authors.validators")
const authorController = require("../controllers/authors.controllers")

const authorRouter = express.Router()

authorRouter.get('/', authorController.getAllAuthors)

authorRouter.get('/:id', authorController.getAuthorByID)

authorRouter.post('/', AddAuthorValidationMW, authorController.addAuthor)

authorRouter.put('/:id', UpdateAuthorValidationMW, authorController.updateAuthor)

authorRouter.delete('/:id', authorController.deleteAuthorByID)

module.exports = authorRouter


