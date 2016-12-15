var mongoose = require('mongoose');

//Schema/Subdocuments for the Top Acts in the movies in movieschema
var ActorsSchema = new mongoose.Schema({
	firstname: {type: String, required: true},
	lastname:{type: String, required:true},
	age:{type: Number, required: false},
	image:{type: Buffer, required:false}
});

var movieSchema = new mongoose.Schema({
	_id: {type: Number, required: true},
	name: {type: String, required: true},
	desc: String,
	ratings: {type: Number, required: false, "default": 0, min: 0, max: 0},
	productionYear: {type: Number, required: false, "default": 1950, min: 1950, max: 2018},
	genre: [String],
	Actors:[ActorsSchema]
	
});

mongoose.model('Movies', movieSchema);