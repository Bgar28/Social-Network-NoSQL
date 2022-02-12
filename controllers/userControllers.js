const { User } = require('../models');

const getAllUser = (req, res) => {
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
    User.findOne({ _id: req.params.id })
        .then((userData) => {
            res.json(userData)
        })
        .catch((err) => res.status(400).json(err))

}

const updateUserbyId = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
    ).then((updatedUser) => {
        res.json(updatedUser)
    })
        .catch((err) => res.status(400).json(err))

}

const deleteUserbyId = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
        .then((deletedUser) => {
            res.json(deletedUser)
        })
        .catch((err) => res.status(400).json(err))
}

const addFriendById = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
    )
        .then((userFriend) => {
            res.json(userFriend)
        })
        .catch((err) => res.status(400).json(err))
}

const deleteFriendById = (req, res) => {
    User.findOneAndDelete(
        { _id: req.params.id },
        { $pull: { friends: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
    )
        .then((userFriend) => {
            res.json(userFriend)
        })
        .catch((err) => res.status(400).json(err))
}





module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUserbyId,
    deleteUserbyId,
    addFriendById,
    deleteFriendById
}