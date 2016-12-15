var express = require('express');
var router = express.Router();
var ctrlMovies = require('../controllers/movies');

router.post('/movies/create/new', ctrlMovies.createMovies);
//router.get('/movies/genre', ctrlMovies.moviesListByGenre);
router.get('/movies', ctrlMovies.moviesListByName);
//router.get('/movies/:image', ctrlMovies.moviesGetImage);
//router.get('/movies', ctrlMovies.moviesListByActors);
router.get('/movies/:movieid', ctrlMovies.moviesDescribeOne);
//router.put('/movies/update/:movieid', ctrlMovies.moviesUpdateOne);
//router.delete('/movies/delete/:movieid', ctrlMovies.moviesDeleteOne);

module.exports = router;