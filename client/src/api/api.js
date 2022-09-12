import axios from 'axios';
const API = axios.create( { baseURL: 'http://localhost:3001/' }); // local server port

export const fetchOneListing = (id) => API.get(`/listings/${id}`);
export const fetchAllListings = () => API.get('/listings');
export const createAListing = (newListing) => API.post('/listings', newListing);