import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  creator: String,
  body: String,
  createdAt: { type: Date, default: new Date() },
});

const commentData = mongoose.model('commentData', commentsSchema);

export default commentData ;
