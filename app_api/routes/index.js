const express = require('express');
const router = express.Router();

router.get('/brand', (req, res) => {
  res.json({
    artist: 'RAK47',
    name: 'Rakim Spriggs',
    email: 'prod.rakim@gmail.com',
    brand: '47 Records',
    meaning: {
      four: 'foundation, structure, discipline, and heart-centered creation',
      seven: 'spiritual awareness, wisdom, intuition, and higher purpose',
      fortySeven: 'the balance between building something real and moving with spiritual vision'
    },
    focus: [
      'Music Production',
      'Artist Development',
      'Creative Direction',
      'Photography',
      'Sound Design'
    ]
  });
});

module.exports = router;