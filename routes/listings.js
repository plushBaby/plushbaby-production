import express from 'express';

import { 
    fetchAllListings, 
    createAListing,
} from '../controllers/listings.js'

const router = express.Router();

router.get('/', fetchAllListings);
router.post('/', createAListing);

export default router;
