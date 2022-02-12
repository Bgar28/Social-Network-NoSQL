const router = require('express').Router();
const { getAllUser, createUser, getUserById, updateUserbyId, deleteUserbyId } = require('../../controllers/userControllers')


router.route('/')
    .get(getAllUser)
    .post(createUser)

router.route('/:id')
    .get(getUserById)
    .put(updateUserbyId)
    .delete(deleteUserbyId)
// router.route('/:userId/friends/:friendId');
module.exports = router;