import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    name: String,
    comment: String,
    createdAt: {type: Date, default: new Date() },
});

const CommentData = mongoose.model('CommentData', commentSchema);

export default CommentData ;