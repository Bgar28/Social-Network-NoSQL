const router = require('express').Router();
const { getAllUsers, createUser, getUserById, updateUserbyId, deleteUserbyId, addFriendById, deleteFriendById } = require('../../controllers/userControllers')


router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:userId')
    .get(getUserById)
    .put(updateUserbyId)
    .delete(deleteUserbyId)

router.route('/:userId/friends/:friendId')
    .post(addFriendById)
    .delete(deleteFriendById)

module.exports = router;