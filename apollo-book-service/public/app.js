
const url = "/graphql";

async function getAllBooks() {

    var query = `query{
        books{
          title
          cover
          price
          author{
            name
          }
        }
      }
    `;

    var data=JSON.stringify({
        query:query
    });

    console.log('data',data);

    var response= await fetch(url,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:data
    });

    var data= await response.json();

   
    

    return data.data.books;
    
    // var response = await axios.post(
    //                     url,
    //                     data,{
    //                         "content-type": "application/json"
    //                     }                        
    //                 )
    // console.log('response.data', response.data);

}

async function request(query){

    var body=JSON.stringify(query);
    console.log('body',body);
    
    var response= await fetch(url,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:body
    });

  
    var data= await response.json();

    return data;
}


async function getBookById(id){

    var query=`query Book($bookId: String) {
        book(id: $bookId) {
          title,
          cover,
          author{
            name
          }
          price
        }
      }`;

    var fullQuery={
        query: query,

        variables:{
            bookId:id
        }
    }

   var response = await request(fullQuery);
    console.log('response',response);
    
   if(response.data.book){
        return [response.data.book]
   } else 
        return [];
    

}


async function showBookById(){
    var id = document.querySelector("#q").value;

    var books=await getBookById(id);

    showBooks(books);
}

async function listAllBooks(){
    var books =await getAllBooks();

    showBooks(books);
    
}


function showBooks(books){
    var rows='';
    for(var book of books){
        if(!book){
            continue;
        }
        
        rows+=`
            <tr>
                <td><img src="${book.cover}" class="book-cover" /></td>
                <td>${book.title}</td>
                <td>${book.author.name}</td>
                <Td>${book.price}</td>
        `
    }

    document
        .querySelector("#book-list")
        .innerHTML=rows;

}