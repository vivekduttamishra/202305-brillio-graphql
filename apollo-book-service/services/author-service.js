
import axios from 'axios';

const baseRESTUrl= 'http://localhost:5000/authors';

export function getAllAuthors(){

    axios
        .get(baseRESTUrl)
        //may take sometime
        .then(response=> console.log('total authors:',response.data.length));

}