var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Mov = mongoose.model('Movies');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};
	module.exports.createMovies = function(req, res){
	Mov.create({
		name: req.body.name,
		desc: req.body.desc,
		ratings: req.body.ratings,
		productionYear: req.body.productionYear,
		genre: req.body.genre.split(","),
		Actors: [{
			firstname: req.body.firstname,
			middlename: req.body.middlename,
			lastname: req.body.lastname,
		}]

	}, function(err, movie){
		if(err){
			sendJsonResponse(res, 400, err);
		}
		else {
			sendJsonResponse(res, 201, movie)
		}
	});
};


module.exports.moviesListByName = function (req, res){
	//if(req.params && req.params.movieid)
	//{
		/*var b64string = /* code */;
		/*var buf = Buffer.from(b64string, 'base64'); */
		Mov
		.find('name')
		.select('name desc ratings productionYear genre Actors.firstname Actors.lastname')
		.exec(function(err, movie){
			//console.log(movie.image);
			if(!movie){
				sendJsonResponse(res, 404, {"message": "movieid not found"
			});
				return;
			} else if(err){
				sendJsonResponse(res, 200, err);
				return;
			}
			sendJsonResponse(res, 200, movie);
		});
	};
	//else {
	//	sendJsonResponse(res, 404, {"message" : "No movieid in request"
	//});
//	}
	//	};


module.exports.moviesDescribeOne = function (req, res){
	if(req.params && req.params.movieid)
	{
		/*var b64string = /* code */;
		/*var buf = Buffer.from(b64string, 'base64'); */
		Mov
		.findById(req.params.movieid)
		.select('name desc ratings productionYear genre Actors.firstname Actors.lastname')
		.exec(function(err, movie){
			//console.log(movie.image);
			if(!movie){
				sendJsonResponse(res, 404, {"message": "movieid not found"
			});
				return;
			} else if(err){
				sendJsonResponse(res, 200, err);
				return;
			}
			sendJsonResponse(res, 200, movie);
		});
	}
	else {
		sendJsonResponse(res, 404, {"message" : "No movieid in request"
	});
	}
		};





		//Modules for creating new Documents and subdocuments 
/*module.exports.moviesListByGenre = function (req, res){
Mov.find({'genre': 'Passion'})
.select('name desc ratings image productionYear topActs genre')
.exec(function(err, genre){
	if(!genre){
				sendJsonResponse(res, 404, {"message": "genre not found"
			});
				return;
	} else if(err){
				sendJsonResponse(res, 200, err);
				return;
	}
		sendJsonResponse(res, 200, genre);
	});
};*/


/*module.exports.moviesListByActors = function (req, res){
	var name = req.query.name;
	name = 'Omotola';	
	var parent = ({'Actors.firstname': name})


	Mov.find(parent)

	   .select('name desc ratings productionYear genre Actors.firstname Actors.middlename Actors.lastname')
	   .exec(function(err, movie)
	{
	if (!name){
		console.log(name);
		sendJsonResponse(res, 200, {"message": "Actors Parameter is required"});
		return;
	}
	else if(err){
				sendJsonResponse(res, 200, err);
				return;
			}
	else{
	sendJsonResponse(res, 200, movie);
	}
});
}*/

/*module.exports.moviesUpdateOne = function(req, res){
	if(!req.params.movieid){
		sendJsonResponse(res, 404, {"message": "Movie Id is required"
	});
		Mov
		.findById(req.params.movieid)
		.exec(function(err, movie){
				movie.name = req.body.name,
				movie.desc = req.body.desc,
				movie.ratings = req.body.ratings,
				movie.image = req.body.image,
				movie.productionYear = req.body.productionYear,
				movie.topActs = req.body.topActs.split(","),
				movie.genre = req.body.genre.split(","),
				movie.Actors = [{
					firstname: req.body.firstname,
					middlename: req.body.middlename,
					lastname: req.body.lastname,
					}]
				movie.save(function(err, movie){
					if(err){
						sendJsonResponse(res, 404, err);
					}
					else{
						sendJsonResponse(res, 200, movie);
					}
				});
			});
	}
}
*/






/*module.exports.moviesDeleteOne = function(req, res){
	var movieid = req.params.movieid;
	if(movieid){
		Mov
		  .findByIdAndRemove(movieid)
		  .exec(
		  	function(err, movie){
		  		if(err){
		  			sendJsonResponse(res, 404, err);
		  			return;
		  		}
		  		sendJsonResponse(res, 204, null)

		  });
	}else{
		sendJsonResponse(res, 404, {"message": "Movie id not available"
	});
	}
};*/

/*module.exports.moviesListByName = function (req, res){
Mov.find('name')
.select('_id name desc ratings image productionYear Actors genre')
.exec(function(err, movieName){
	if(!movieName){
				sendJsonResponse(res, 404, {"message": "movie name not found"
			});
				return;
	} else if(err){
				sendJsonResponse(res, 200, err);
				return;
	}
		sendJsonResponse(res, 200, movieName);
	});
};*/