const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:'n/a'
    },
    img_url:{
        type:String,
        default:'n/a'
    },
    pages:{
        type:String,
        default:'n/a',
        min:5,
        max:80
    },
    // rating:{
    //     type:Number,
    //     required:true,
    //     min:5,
    //     max:10
    // },
    price:{
        type:String,
        default:'n/a'
    },
    genId:{
        type:String,
        default:202020,
        required:true,
        unique:1,
        minlength:6,
        maxlength:7
    },
    ownerId:{
        type:String,
    },
    allowCheck:{
        type:Boolean,
        default:false,
    },
    allowCompat:{
        type:Boolean,
        default:false
    },
    allowShow:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Book = mongoose.model('Book',bookSchema )

module.exports = { Book }