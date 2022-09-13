import mongoose from 'mongoose';

const listingSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    price: Number,
    condition: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    name: String,
    createdAt: {type: Date, default: new Date() },
});

const ListingData = mongoose.model('ListingData', listingSchema);

export default ListingData ;