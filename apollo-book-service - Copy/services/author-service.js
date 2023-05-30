
import axios from 'axios';

const baseRESTUrl= 'http://localhost:5000/authors';

export function getAllAuthors(){

    return axios
            .get(baseRESTUrl)

            //may take sometime
            .then(response=> response.data);

}

export async function getAuthorById(id){

    var url = `${baseRESTUrl}/${id}`;

    var response = await axios.get(url);

    console.log('response.status',response.status);

    return response.data; //this is a promised return
    
}

