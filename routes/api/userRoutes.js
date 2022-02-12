const router = require('express').Router();
const { getAllUser, createUser, getUserById, updateUserbyId, deleteUserbyId, addFriendById, deleteFriendById } = require('../../controllers/userControllers')


router.route('/')
    .get(getAllUser)
    .post(createUser)

router.route('/:id')
    .get(getUserById)
    .put(updateUserbyId)
    .delete(deleteUserbyId)

router.route('/:id/friends/:friendId')
    .post(addFriendById)
    .delete(deleteFriendById)

module.exports = router;