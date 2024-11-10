const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    seller: {
        type : String,
        required: true,
    },

    count: {
        type : Number,
        required: true,
    },
    
    price: {
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
    }
    

})

const MedicineModel = mongoose.model('Medicines', MedicineSchema);

module.exports = MedicineModel;
