import axios from 'axios';
const API = axios.create( { baseURL: 'http://localhost:3001/' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('accountProfile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accountProfile')).token }`;
    }
    return req;
})

export const fetchOneListing = (id) => API.get(`/listings/${id}`);
export const fetchAllListings = () => API.get('/listings');
export const createAListing = (newListing) => API.post('/listings', newListing);
export const updateListing = (id, updatedListing) => API.patch(`/listings/${id}`, updatedListing);
export const deleteListing = (id) => API.delete(`/listings/${id}`);
export const commentListing = (value, id) => API.post(`/listings/${id}/commentListing`, { value });
export const signIn = (signUpsignInFormData) => API.post('/auth/signin', signUpsignInFormData);
export const signUp = (signUpsignInFormData) => API.post('/auth/signup', signUpsignInFormData);
export const makeAComment = (id, comment) => API.post(`/listings/${id}`, comment);