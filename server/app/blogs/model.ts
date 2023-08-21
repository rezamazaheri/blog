import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  "image": String,
  "title": String,
  "excerpt": String,
  "caption": String
})

export default model('blog', blogSchema)