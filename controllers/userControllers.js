const { User } = require('../models');


const getAllUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => res.status(400).json(err))

}

const createUser = (req, res) => {
    User.create(req.body)
        .then((userData) => {
            res.json(userData)
        })
        .catch((err) => res.status(400).json(err))

}

const getUserById = (req, res) => {
    User.findOne({ _id: req.params.userId })
        .then((userData) => {
            !userData ? res.status(404).json({ message: 'Could not find a user matching that ID, please try again!'})
            : res.json(userData)
        })
        .catch((err) => res.status(400).json(err))

}

const updateUserbyId = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
    ).then((updatedUser) => {
        !updatedUser ? res.status(404).json({ message: 'Could not find a user matching that ID, please try again!'})
        : res.json(updatedUser)
    })
        .catch((err) => res.status(400).json(err))

}

const deleteUserbyId = (req, res) => {
    User.findOneAndDelete({ _id: req.params.userId })
        .then((deletedUser) => {
            !deletedUser ? res.status(404).json({ message: 'Could not find a user matching that ID, please try again!'})
            : res.json(deletedUser)
        })
        .catch((err) => res.status(400).json(err))
}

const addFriendById = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
    )
        .then((userFriend) => {
            !userFriend ? res.status(404).json({ message: 'Could not find a user matching that ID, please try again!'})
            : res.json(userFriend)
        })
        .catch((err) => res.status(400).json(err))
}

const deleteFriendById = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
    )
        .then((userFriend) => {
            !userFriend ? res.status(404).json({ message: 'Could not find a user matching that ID, please try again!'})
            : res.json(userFriend)
        })
        .catch((err) => res.status(400).json(err))
}





module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserbyId,
    deleteUserbyId,
    addFriendById,
    deleteFriendById
}