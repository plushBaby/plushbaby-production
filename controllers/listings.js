import express from "express";
import mongoose from "mongoose";
import ListingData from "../models/listingData.js";

const router = express.Router();

export const fetchOneListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await ListingData.findById(id);
    res.status(200).json(listing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const fetchAllListings = async (req, res) => {
  try {
    const listings = await ListingData.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAListing = async (req, res) => {
  const listing = req.body;
  const newListingData = new ListingData({
    ...listing,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newListingData.save();
    res.status(201).json(newListingData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateListing = async (req, res) => {
  const { id: _id } = req.params;
  const listing = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No listing with the id: ${_id}`);
  const updateListing = await ListingData.findByIdAndUpdate(
    _id,
    { ...listing, _id },
    { new: true }
  );
  res.json(updateListing);
};

export const deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No listing with the id: ${id}`);

  try {
    await ListingData.findByIdAndRemove(id);
    res.json({ message: "Listing deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const commentListing = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No listing with the id: ${id}`);
  const listing = await ListingData.findById(id);
  listing.comments.push(value);
  const updateListing = await ListingData.findByIdAndUpdate(id, listing, {
    new: true,
  });
  res.json(updateListing);
};

export default router;
