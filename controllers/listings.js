import express from "express";
import mongoose from "mongoose";
import listingModelData from "../models/listingModelData.js";


const router = express.Router();

export const fetchOneListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await listingModelData.findById(id);
    res.status(200).json(listing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const fetchAllListings = async (req, res) => {
  try {
    const listings = await listingModelData.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAListing = async (req, res) => {
  const listing = req.body;
  const newlistingModelData = new listingModelData({
    ...listing,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newlistingModelData.save();
    res.status(201).json(newlistingModelData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateListing = async (req, res) => {
  const { id: _id } = req.params;
  const listing = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No listing with the id: ${_id}`);
  const updateListing = await listingModelData.findByIdAndUpdate(
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
    await listingModelData.findByIdAndRemove(id);
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
  const listing = await listingModelData.findById(id);
  listing.comments.push(value);
  const updateListing = await listingModelData.findByIdAndUpdate(id, listing, {
    new: true,
  });
  res.json(updateListing);
};

export default router;
