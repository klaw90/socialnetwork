const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thought/
router
  .route('/')
  .get(getAllThoughts);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought);

// /api/thoughts/<thoughId>
router
  .route('/:thoughtId')
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router
  .route('/:thoughtId/reactions/')
  .post(addReaction);
  

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;