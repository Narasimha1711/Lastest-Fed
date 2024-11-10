const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    username: {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    location: {
        type: Array,
        required: true
    },
    cart: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
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
        image: {
            type: String,
        },
        count: {
            type: Number,
            required: true,
            default: 1
        }
        // Add other fields as needed
    }],
    booked: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
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
        image: {
            type: String,
        },
        count: {
            type: Number,
            required: true
        }
        // Add other fields as needed
    }],
    received: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
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
        image: {
            type: String,
        }
        // Add other fields as needed
    }]

}, {
    timestamps: true
}
)

const UserModel = mongoose.model('UserSchema', UserSchema);

module.exports = UserModel;
