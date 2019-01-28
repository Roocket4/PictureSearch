import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 23cef6bd26d45dd09a1663a768466e6b32cb61b04aa583efe54630bccccb41d0'
    }
})