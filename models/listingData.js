import mongoose from 'mongoose';


const listingSchema = mongoose.Schema({
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

const ListingData = mongoose.model('ListingData', listingSchema);

export default ListingData ;
