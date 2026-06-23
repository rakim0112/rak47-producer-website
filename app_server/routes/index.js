const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'RAK47 | Producer' });
});

router.get('/meaning', (req, res) => {
  res.render('meaning', { title: '47 Meaning' });
});

router.get('/capital-steez', (req, res) => {
  res.render('steez', { title: 'Capital STEEZ & 47' });
});

router.get('/the47thproblem', (req, res) => {
  res.render('masons', {
    title: 'The 47th Problem'
  });
});
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact RAK47' });
});

module.exports = router;