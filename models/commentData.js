import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  creator: String,
  body: String,
  createdAt: { type: Date, default: new Date() },
});

module.exports = Comment= mongoose.model('comment', commentsSchema);
