const express = require('express')
const router = express.Router()
const { getbooks,getbook, setbooks,updatebooks,deletebooks } = require('../controller/bookController')
// const {protect} = require('../middleware/authMiddleware')
//the '/' will turn into /api/Books in server

// router.route('/').get(protect, getBooks).post(protect, setBooks)
// router.route('/:id').put(protect, updateBooks).delete(protect, deleteBooks)

router.get('/', getbooks)
router.get('/:id', getbook)
router.post('/', setbooks)
router.put('/:id', updatebooks)
router.delete('/:id', deletebooks)



module.exports = router
