const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, removeThought } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router
  .route('/:userId')
  .post(addThought);

// /api/thought/
router
  .route('/')
  .get(getAllThoughts);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(addThought)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router
  .route('/:userId/:thoughtId/:reactionId')
  .delete(removeThought);
  
module.exports = router;