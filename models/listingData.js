import mongoose from 'mongoose';


const listingSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    price: Number,
    category: String,
    condition: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    name: String,
});

const ListingData = mongoose.model('ListingData', listingSchema);

export default ListingData ;
