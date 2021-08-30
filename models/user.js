const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String
    },

    thoughts: []
});

const User = model('User', UserSchema);

module.exports = User;