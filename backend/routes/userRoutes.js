// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { _id: '1', name: 'Abdoulay' },
    { _id: '2', name: 'Malick' }
  ]);
});

module.exports = router;
