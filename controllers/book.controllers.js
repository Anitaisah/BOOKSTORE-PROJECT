const bookModel = require('../Models/books.models');


function getAllBooks(req, res) {
    bookModel.find()
    .then(books => {
        res.send(books)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

function getBookByID(req, res) {
    const id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

function addBook(req, res) {
    const book = req.body
    book.lastUpdateAt = new Date()
    bookModel.create(book)
        .then(book => {
            res.status(201).send(book)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function upDateBookByID(req, res) {
    const id = req.params.id
    const book = req.body
    book.lastUpdateAt = new Date()
    bookModel.findByIdAndUpdate(id, book, { new: true })
        .then(newBook => {
            res.status(200).send(newBook)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


function deleteBookByID(req, res) {
    const id = req.params.id
    bookModel.findByIdAndDelete(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

    module.exports = {
    getAllBooks,
    getBookByID,
    addBook,
    upDateBookByID,
    deleteBookByID,

}
