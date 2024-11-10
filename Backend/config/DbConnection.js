const mongoose = require('mongoose');

require('dotenv').config()

const connection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CONNECTION);
        console.log("Database Connection Established")
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = connection;