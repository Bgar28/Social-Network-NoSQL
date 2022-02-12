const { User } = require('../models');

const getAllUser = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
}

const createUser = (req, res) => {
    User.create(req.body)
        .then((userData) => {
            res.json(userData)
        })

}

const getUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((userData) => {
            res.json(userData)
        })
}

const updateUserbyId = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
    ) .then((updatedUser) => {
        res.json(updatedUser)
    })
}

const deleteUserbyId = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
    .then((deletedUser) => {
        res.json(deletedUser)
    })
}











module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUserbyId,
    deleteUserbyId
}