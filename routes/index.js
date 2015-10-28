var express = require('express');
var router = express.Router();
var fs=require('fs');
var path = require('path');
var project = JSON.parse(fs.readFileSync(path.join(__dirname,'../project.json'), 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: project.title });
});


router.get('/sightseeing',function(req, res, next){
  res.render('sightseeing');
});

router.get('/case',function(req, res, next){
  res.render('case');
});

router.get('/about',function(req, res, next){
  res.render('about');
});

router.get('/contact',function(req, res, next){
  res.render('contact');
});

module.exports = router;
