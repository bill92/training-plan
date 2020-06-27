const express = require('express');
const router = express.Router();

// @Route   POST api/nutrition
// @Desc    Add meal
// @Access  Public
router.post('/', (req, res) => {
  res.json({ msg: 'Success' })
})

module.exports = router;
