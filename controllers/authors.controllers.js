const authorsModel = require('../Models/authors.models')

function getAllAuthors(req, res) {
    authorsModel.find()
        .then(authors => {
            res.send(authors)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
}

function getAuthorByID(req, res) {
    const id = req.params.id
    authorsModel.findById(id)
        .then(author => {
            res.status(200).send(author)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

function addAuthor(req, res) {
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    authorsModel.create(author)
        .then(author => {
            res.status(201).send(author)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function updateAuthor(req, res) {
    const id = req.params.id
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    authorsModel.findByIdAndUpdate(id, author, { new: true })
        .then(newAuthor => {
            res.status(200).send(newAuthor)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteAuthorByID(req, res) {
    const id = req.params.id
    authorsModel.findByIdAndDelete(id)
        .then(author => {
            res.status(200).send(author)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllAuthors,
    getAuthorByID,
    addAuthor,
    updateAuthor,
    deleteAuthorByID
}