const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// schema to create thought table
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a') 
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
