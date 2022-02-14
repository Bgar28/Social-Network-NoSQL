const router = require('express').Router();
const { getAllThoughts, getThoughtById, createAThought, updateThoughtById, deleteThoughtById, thoughtReaction, deleteReaction } = require('../../controllers/thoughtController')

router.route('/')
    .get(getAllThoughts)
    .post(createAThought)

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)

router.route('/:thoughtId/reactions')
    .post(thoughtReaction)
    
    router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)
    
module.exports = router;