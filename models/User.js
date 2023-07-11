const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 75
    },
    password: {
        type: String,
        required: true,
        min: 10
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    friends: {
        type: Array,
        default: []
    },
    minions: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);