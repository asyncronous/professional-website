const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    type: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    images: {type: [
        {
            link: {type: String},
        }
    ]},
})

//export post model
const PostModel = mongoose.model("Post", PostSchema)
module.exports = PostModel