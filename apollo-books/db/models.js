import {Schema, model} from 'mongoose';

export const Author= model("Author",new Schema({
    _id:String,
    name: {
        type:String,
        required:true
    },
    biography: {
       type:String,
       required:true,
       maxLength:2000               
    },
    photo:{
        type:String,
        required:true
    }
}));

export const Book= model("Book",new Schema({
    
    _id: {type:String, required:true,},
    title: {type:String, required:true},
    authorId:{
        type:String,
        ref:"Author",
        required:true
    },
    description: {
        type:String, 
        required:true,
        maxLength:2000
    },
    price: {
        type:Number , 
        required:true,
        min:0
    },
    rating:{
        type:Number, 
        required:true,
        min:1,
        max:5
    },
    tags: [{type:String}]

}));
