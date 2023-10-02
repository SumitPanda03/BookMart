const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')

//@desc Get books
//@route GET /api/books
//@access Private
const getbooks= asyncHandler(async (req,res) => {
    const books = await Book.find({}) //books ke model mei user model ko reference kiya hai
    res.status(200).json(books)
})

//@desc Get book
//@route GET /api/books/:title
//@access Private
const getbook= asyncHandler(async (req,res) => {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });//books ke model mei user model ko reference kiya hai
    res.status(200).json(book)
})

//@desc Set books
//@route POST /api/books
//@access Private
const setbooks = asyncHandler(async (req,res) => {
    if(!req.body.title || !req.body.author || !req.body.publishYear  ){
        // res.status(400).json({message: 'Please add a text file'})
        return res.status(400).send({
            message: 'Please add all the fields'
        })
        // res.status(400)
        // throw new Error("Please add all the field")
    }

    const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        })
    // only logged in user can see his/her own Book
    return res.status(200).json(book)
})

//@desc Update books
//@route PUT /api/books
//@access Private
const updatebooks = asyncHandler(async (req,res) => {
    const book = await Book.findById(req.params.id)
    if(!Book){
        res.status(400)
        throw new Error("Book not found")
    }

    const updatedbook = await Book.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    })

    return res.status(200).json(updatedbook)
})

// //@desc Delete books
// //@route DELETE /api/books
// //@access Private
const deletebooks = asyncHandler(async (req,res) => {
    const book = await Book.findById(req.params.id)
    //logged in user should only be able to delete their own Book not others
    if(!Book){
        res.status(400)
        throw new Error('Book not found')
    }
     
    await Book.deleteOne()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getbooks,
    getbook,
    setbooks,
    updatebooks,
    deletebooks
}

//promises use karte normal wala then then catch karke error handle
//async await use karne se try catch
//express ka error handler use karne se uska automatically ho jata hai