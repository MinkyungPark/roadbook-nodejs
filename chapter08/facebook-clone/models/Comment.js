const mongoose = require("mongoose");

let CommentSchema = new mongoose.Schema({ // 댓글용 스키마
    content: String,
    likes: Number,
    creator: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        firstName: String,
        lastName: String
    }
});

let Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
