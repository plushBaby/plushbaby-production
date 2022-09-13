import express from 'express';

import { 
    fetchAllListings, 
    createAListing,
    updateListing,
    fetchOneListing,
    deleteListing,
} from '../controllers/listings.js'

const router = express.Router();

router.get('/', fetchAllListings);
router.get('/:id', fetchOneListing);
router.post('/', createAListing);
router.patch('/:id', updateListing);
router.delete('/:id', deleteListing);

export default router;
