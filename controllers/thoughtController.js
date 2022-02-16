const { Thought, User } = require('../models');

const getAllThoughts = (req, res) => {
    Thought.find()
        .then((thoughts) => {
            res.json(thoughts)
        })
        .catch((err) => res.status(400).json(err))

}

const getThoughtById = (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
        .then((thoughtData) => {
            !thoughtData? res.status(404).json({ message: 'Could not find a thought matching that ID, please try again!'})
            : res.json(thoughtData)
        })
        .catch((err) => res.status(400).json(err))

}

const createAThought = (req, res) => {
    Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thoughtData} },
                { runValidators: true, new: true }
            )
        })
        .then((thoughtData) => {
            !thoughtData? res.status(404).json({ message: 'Could not find a user matching that ID to create thought, please try again!'})
            : res.json(thoughtData)
        })
        .catch((err) => res.status(400).json(err))

}

const updateThoughtById = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $set: req.body},
        { runValidators: true, new: true}
    ).then((thoughtData) => {
        !thoughtData? res.status(404).json({ message: 'Could not find a thought matching that ID, please try again!'})
            : res.json(thoughtData)
    })
        .catch((err) => res.status(400).json(err))
}

const deleteThoughtById = (req, res) => {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((deletedThought) => {
            !deletedThought? res.status(404).json({ message: 'Could not find a thought matching that ID, please try again!'})
            : res.json(deletedThought)
        })
            .catch((err) => res.status(400).json(err))
}

const thoughtReaction = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $push: { reactions: req.body } },
        { runValidators: true, new: true}
    )
        .then((reactionData) => {
            !reactionData? res.status(404).json({ message: 'Could not find a thought matching that ID, please try again!'})
            : res.json(reactionData)
        })
            .catch((err) => res.status(400).json(err))
}

const deleteReaction = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true}
    )
        .then((reactionData) => {
            !reactionData? res.status(404).json({ message: 'Could not find a thought or reaction matching that ID, please try again!'})
            : res.json(reactionData)
        })
            .catch((err) => res.status(err))
}




module.exports = {
    getAllThoughts,
    getThoughtById,
    createAThought,
    updateThoughtById,
    deleteThoughtById,
    thoughtReaction,
    deleteReaction
}