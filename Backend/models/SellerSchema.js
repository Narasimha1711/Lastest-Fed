const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    shopName: {
        type : String,
        required: true,
        // unique: true
    },
    password: {
        type : String,
        required: true,
    },
    location: {
        type: Array,
        required: true
    },
    medicinesUploaded: 
        [{
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            medicine: {
                type: String,
                required: true
            },
            seller: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            image: {
                type: String
            }
            // Add other fields as needed
        }],
    gstin : {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    image: {
        type: String,
        // required: true
    },
    
    
})

const SellerModel = mongoose.model('SellerSchema', SellerSchema);

module.exports = SellerModel;
