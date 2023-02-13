import mongoose from "mongoose";

const ballotSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    status: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User'
    }
})

module.exports = mongoose.models.Ballot || mongoose.model('Ballot', ballotSchema)