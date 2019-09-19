const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "user" }, // who wrote the comment
    username: String,
    createdAt: { type: Date, default: Date.now },
    content: String
});

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "user" }, //who make the post
    comments: [commentSchema]
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
