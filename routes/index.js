let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

/* GET project page. */
router.get('/project', (req, res, next) => {
  res.render('project', { title: 'project' });
});

/* GET service page. */
router.get('/service', (req, res, next) => {
  res.render('service', { title: 'service' });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
