const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);  // Debugging log

    if (!process.env.MONGODB_URI) {
        console.error("❌ MONGODB_URI is not defined in .env file!");
        process.exit(1);
    }

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ DB Connected Successfully"))
    .catch((error) => {
        console.error("❌ DB Connection Failed:", error);
        process.exit(1);
    });
};
