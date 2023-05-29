
import axios from 'axios';

const baseRESTUrl= 'http://localhost:5000/books';

export function getAllBooks(){

    return axios
            .get(baseRESTUrl)

            //may take sometime
            .then(response=> response.data);

}

export async function getBookById(id){
    var url = `${baseRESTUrl}/${id}`;
    var response = await axios.get(url);

    return response.data; //this is a promised return
    
}

