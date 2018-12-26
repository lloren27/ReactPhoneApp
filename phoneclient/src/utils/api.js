import axios from 'axios';

export function getPhones () {
    return axios.get('http://localhost:4200/api/phone');
}
// function getIdPhones () {
//     return axios.get('http://localhost:4200/api/phone/:id');
// }
