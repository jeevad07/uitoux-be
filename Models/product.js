const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productCode: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: Number, required: true },
    cost: { type: Number,required:true},
    productimgbase64:{type:String}
});

module.exports = mongoose.model('product', productSchema);