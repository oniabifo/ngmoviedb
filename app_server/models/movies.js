var mongoose = require('mongoose');

//Schema/Subdocuments for the Top Acts in the movies in movieschema
/*var topActsSchema = new mongoose.Schema({
	nameTopActs: {type: String, required: true}
});

//Schema/Subdocuments for the Genre in the movies in movieschema
var genreSchema = new mongoose.Schema({
	nameGenre:{type: String, required: true}
});*/

var movieSchema = new mongoose.Schema({
	name: {type: String, required: true},
	desc: String,
	ratings: {type: Number, required: true, "default": 0, min: 0, max: 0},
	image: Buffer,
	productionYear: {type: Number, required: false, "default": 1950, min: 1950, max: 2018},
	topActs: [String],
	genre: [String]
	
});

mongoose.model('movie', movieSchema);

/*
db.movies.save({
	"_id" : ObjectId("583b9b984dab3275c3e5c67a"),
	name : "Chinasa My Love",
	desc : "This incredible family drama is a clear revelation to how things could be when trust and sacrifice is bestowed",
	ratings : 1,
	image : "/var/www/html/ngmoviedb/images/chinasa-poster.jpg",
	productionYear : 2016,
	topActs : [
		"Chioma Akpotha",
		"Uche Odoputa",
		"Emeka Enyiocha"
	],
	genre : [
		"Family",
		"Drama"
	]
},
{
	"_id" : ObjectId("583ba3fceb5aa8dd842e761c"),
	name : "Lack Of Home Training",
	desc : "A young and beautiful lady is faced with challenges of life. She is involved in all sort of dirty deals just to make ends meet. Her elder brother on the other is called the Don",
	ratings : 2,
	image : "/images/lack_of_home_training.jpg",
	productionYear : 2016,
	topActs : [
		"Omotola Jalade Ekheinde",
		"Emeka Enyiocha"
	],
	genre : [
		"Family",
		"Drama"
	]
},
{
	"_id" : ObjectId("583ba511ff27b9701a3335df"),
	name : "Temple Of Justice 1",
	desc : "Omotola is a woman of justice always defending people that needs help and she loves what she does because she fights for justice.",
	ratings : 3,
	image : "/images/temple_of_justice_1.jpg",
	productionYear : 2015,
	topActs : [
		"Omotola Jalade Ekheinde"
	],
	genre : [
		"Family",
		"Drama"
	]
},
{
	"_id" : ObjectId("583ba526ff27b9701a3335e0"),
	name : "Temple of Justice 2",
	desc : "A young lady lawyer is out to fight for justice for the widows and people in need of her help but she finds herself in a dilemma when her father in law is a culprist of a crime and she needs to defend the other",
	ratings : 4,
	image : "/images/temple_of_justice_2.jpg",
	productionYear : 2015,
	topActs : [
		"Omotola Jalade Ekheinde"
	],
	genre : [
		"Family",
		"Drama",
		"Passion"
	]
},
{
	"_id" : ObjectId("583ba53fff27b9701a3335e1"),
	name : "Hand Of Destiny Season 1",
	desc : "Nothing would make Jake, a playboy to drop the game, not even Keila his fiance, but when he meets Nora in a business arrangement he knew there is something about her that he finds irresistible.",
	ratings : 5,
	image : "/images/promise_of_love1.jpg",
	productionYear : 2015,
	topActs : [
		"Mike Ezuruonye",
		"Ini edo",
		"Mercy Johnson"
	],
	genre : [
		"Family",
		"Drama",
		"Passion"
	]
},
{
	"_id" : ObjectId("583ba551ff27b9701a3335e2"),
	name : "Hand Of Destiny Season 2",
	desc : "Nothing would make Jake, a playboy to drop the game, not even Keila his fiance, but when he meets Nora in a business arrangement he knew there is something about her that he finds irresistible.",
	ratings : 5,
	image : "/images/promise_of_love1.jpg",
	productionYear : 2015,
	topActs : [
		"Mike Ezuruonye",
		"Ini edo",
		"Mercy Johnson"
	],
	genre : [
		"Family",
		"Drama",
		"Passion"
	]
})*/