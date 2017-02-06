let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('content/index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', { title: 'About' });
});

/* GET project page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', { title: 'Projects' });
});

/* GET service page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', { title: 'Contact' });
});

module.exports = router;
