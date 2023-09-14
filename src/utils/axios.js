import axios from 'axios';

const baseURL = `https://wedding-api-new.up.railway.app`;
// const baseURL = `http://localhost:8081`;


export const getData = () => {
    return axios.get(`${baseURL}/api/get-data`)
}

export const submitRsvp = (body) => {
    return axios.post(`${baseURL}/api/submit-rsvp`, body)
}
