import mongoose from 'mongoose';


const listingModel = mongoose.Schema({
  title: String,
  subtitle: String,
  price: Number,
  category: String,
  condition: String,
  description: String,
  creator: String,
  selectedFile: String,
  name: String,
  comments: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const listingModelData  = mongoose.model('listingModelData', listingModel );

export default listingModelData ;