import express from 'express';

import ListingData from '../models/listingData.js';

const router = express.Router();

export const fetchOneListing = async (req, res) => {
    const { id } = req.params;

    try {
        const listing = await ListingData.findById(id);
        res.status(200).json(listing);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}

export const fetchAllListings = async (req, res) => {
    try {
        const listings = await ListingData.find();
        res.status(200).json(listings);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAListing = async (req, res) => {
    const listing = req.body;
    const newListingData = new ListingData({ ...listing });

    try {
        await newListingData.save();
        res.status(201).json(newListingData );

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;