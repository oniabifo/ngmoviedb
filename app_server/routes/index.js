var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');
var ctrlMovies = require('../controllers/movies');
var ctrlOthers = require('../controllers/others');
var ctrlTvs = require('../controllers/tvs')

/*var homepageController = function (req, res)
{
	res.render('index', {title: 'ngmoviedb.org'})
};*/

/* GET home page. */

/*Movie pages*/
router.get('/', ctrlMovies.homelist);
router.get('/movie', ctrlMovies.movieInfo);
router.get('/movie/review/new', ctrlMovies.addReview);
//This is for the main homepage. //router.get('/', ctrlMain.index);

//for tv shows
router.get('/tvshows', ctrlTvs.tvshows);
router.get('/tvshows/info', ctrlTvs.tvInfo);
router.get('/tvshows/review/new', ctrlTvs.addReview);

/*other pages*/
//about the movie homepage
router.get('/about', ctrlOthers.about);

module.exports = router;
