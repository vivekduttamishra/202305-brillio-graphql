import {Book} from '../db/models.js';

export const addBook=async book=>{
    
    var dbBook= new Book({...book, _id:book.id});
    await dbBook.save();
    return dbBook;
}

export const getAllBooks= async()=>{
    return await Book.find();
}

export const getBookById= async id=>{
    return await Book.findById(id);
}

export const getBooksByAuthor= async authorId=>{
    return await Book.find({authorId});
}