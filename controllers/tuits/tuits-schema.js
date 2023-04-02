import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    time: String,
    replies: Number,
    retuits: Number,
    disliked: Boolean,
    dislikes: Number,
    userName: String,
    handle: String,
    image: String,
    title: String,
}, {collection: 'tuits'});
export default schema;