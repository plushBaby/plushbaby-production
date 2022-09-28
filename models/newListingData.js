import mongoose from 'mongoose';


const newListingModel = mongoose.Schema({
  title: String,
  subtitle: String,
  price: Number,
  category: String,
  condition: String,
  description: String,
  creator: String,
  selectedFile: String,
  name: String,
  tags: String,
  comments: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const newListingDatas  = mongoose.model('newListingDatas', newListingModel );

export default newListingDatas ;