const mongoose = require("mongoose");
const validator = require("validator"); // used for email field

// Create user schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true, // used to remove left and right extra spacing
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("Not a valid Email");
            }
        },
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "In-Active"],
        default: "Active",
    },
    dateCreated: Date, // Fixed the typo here
    dateUpdated: Date,
});

// Model definition
const User = mongoose.model("User", userSchema); // Changed the model name to singular (User)
module.exports = User;
