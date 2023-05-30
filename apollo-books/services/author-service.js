import {Author} from '../db/models.js';

export const addAuthor=async author=>{
    
    var dbAuthor= new Author({...author, _id:author.id});
    await dbAuthor.save();
    return dbAuthor;
}

export const getAllAuthors= async()=>{
    return await Author.find();
}

export const getAuthorById= async id=>{
    var author= await Author.findById(id);
    console.log(id,author);

    return author;
    
}