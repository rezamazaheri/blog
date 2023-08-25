import { Schema, model } from "mongoose";


const userSchema = new Schema({
    "username": String,
    "password": String,
    "rePassword": String,
    "role": String
})

export default model('user', userSchema)