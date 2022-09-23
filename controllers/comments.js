import express from 'express';
import mongoose from 'mongoose';
import CommentData from '../models/commentData.js';

const router = express.Router();

export const makeAComment = async (req, res) => {
    const comment = req.body;
    const newCommentData = new CommentData({ ...comment, creator: req.userId , createdAt: new Date().toISOString()  });

    try {
        await newCommentData.save();
        res.status(201).json(newCommentData );

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export default router;