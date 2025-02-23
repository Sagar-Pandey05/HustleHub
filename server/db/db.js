const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Successfully connected with MongoDB!");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });
}

module.exports = connect; // CommonJS export
