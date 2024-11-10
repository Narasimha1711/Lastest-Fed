const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    count: {
        type : Number,
    },
    
    price: {
        type: Number
    },
    discountedPrice: {
        type: Number
    },
    discount: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String,
        // required: true
    },
    category: {
        type: String
    },
    location: {
        type: Array,
        required: true
    },
    

})

const MedicineModel = mongoose.model('Medicines', MedicineSchema);

module.exports = MedicineModel;
