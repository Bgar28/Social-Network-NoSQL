const { Schema, model, Types } = require('mongoose');
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

// schema to create reaction subdocument
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: (timestamp) => moment(timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a') 
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
