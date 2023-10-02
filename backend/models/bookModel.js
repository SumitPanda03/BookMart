const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    author:{
        type: String,
        required: [true, 'Please add Author'],
    },
    publishYear:{
        type: Number,
        required: [true, 'Please add Year'],
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Book', bookSchema)