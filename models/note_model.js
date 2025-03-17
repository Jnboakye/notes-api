import { Schema } from 'mongoose'
import mongoose from 'mongoose'



const noteSchema = new Schema({
    title: {
        type: String,
        lowercase: true
    },

    body: {
        types: String
    },

    date: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true })


export const Note = mongoose.model('note', noteSchema)