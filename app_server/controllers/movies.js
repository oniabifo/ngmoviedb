/*Get 'movie home page */
var request = require('request');
var apiOptions = {
	server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production'){
	apiOptions = "https://sheltered-bayou-91474.herokuapp.com/";
}
var renderHomepage = function(req, res, responseBody){
	var message;
	if(!(responseBody instanceof Array)){
		message = "API LOOKUP ERROR";
		responseBody = [];


	} else {
		if(!responseBody.length){
			message = "No places found nearby";
		}
	}
	res.render('movies-list', {
			  //title: 'Ngmoviegb - The largest database containing Nigerian Movies informations and shows.',
			  pageHeader: {
			title: 'Ngmoviedb',
			strapline: 'The largest database containing Nigerian Movies informations and shows.'
			},
			movies: responseBody
		});
	};

module.exports.homelist = function(req, res){
	var requestOptions, path;
	path = '/api/movies';
	requestOptions = {
		url: apiOptions.server + path,
		method : "GET",
		json : {}
	};
		request(
			requestOptions,
			function(err, response, body){
				renderHomepage(req, res, body);
			}
		);
	};


/*module.exports.movieInfo = function(req, res){
	res.render('movie', {title: 'Movie information'});
};*/
//rendering movie information for movie information through movie id
var renderMovieInfo = function(req, res, movDetail){
	res.render('movies',{
		movie: movDetail,
		title: movDetail.name
		
	});
	//console.log("This is movie details "+movDetail.name);
};

module.exports.movieInfo = function(req, res){
	var requestOptions, path;
	var url;
	path = "/api/movies/" + req.params.movieid;
	//console.log(path);
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {}
	};
	
	request(
		requestOptions,
		function(err, response, movie){
			var data = movie;
			console.log(response);
		renderMovieInfo(req, res, movie);
		//console.log("This is data " + movie.image);	
		});
};

/* Get 'Movie info' page */

/* Get 'Add review' page */
var renderCreateForm = function(req, res){
	res.render('addMovie', {title: 'Add movie'
});
};
module.exports.createMovies = function(req, res){
	renderCreateForm(req, res);
};

module.exports.addReview = function(req, res){
	res.render('movie-review-form', {title: 'Movie review'});
};

