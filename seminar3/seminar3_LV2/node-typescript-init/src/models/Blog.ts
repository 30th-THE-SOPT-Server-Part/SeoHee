import mongoose from "mongoose";
import { BlogInfo } from "../interfaces/blog/BlogInfo";
import { UserSchema } from "./User";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [String],
    reviewers: [UserSchema]
})

export default mongoose.model<BlogInfo & mongoose.Document>("Blog", BlogSchema);