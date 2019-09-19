const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    intro: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
    birthday: Date,
    //friend
    friendList: [{ type: Schema.Types.ObjectId, ref: "user" }],
    pendingFriendRequestTo: [{ type: Schema.Types.ObjectId, ref: "user" }],
    pendingFriendRequestFrom: [{ type: Schema.Types.ObjectId, ref: "user" }]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
