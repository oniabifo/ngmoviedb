/*Get 'movie home page */
module.exports.homelist = function(req, res){
	res.render('movies-list', { 
	  title: 'Ngmoviegb - The largest database containing Nigerian Movies informations and shows.',
	  pageHeader: {
		title: 'Ngmoviedb',
		strapline: 'The largest database containing Nigerian Movies informations and shows.'
	},
	movies:[{
		name: 'Chinasa My Love',
		desc: 'This incredible family drama is a clear revelation to how things could be when trust and sacrifice is bestowed',
		ratings: 5,
		top_acts: ['Chioma Akpotha', 'Uche Odoputa', 'Emeka Enyiocha'],
		genre: ['Family', 'drama'],
		image: '/images/chinasa-poster.jpg',
		prod_year: 2016
	},
	{	name: 'Lack Of Home Training',
		desc: 'A young and beautiful lady is faced with challenges of life.. She is involved in all sort of dirty deals just to make ends meet. Her elder brother on the other is called the Don',
		ratings: 5,
		top_acts: ['Omotola Jalade Ekheinde', 'Emeka Enyiocha'],
		genre: ['Family', 'Drama'],
		image: '/images/lack_of_home_training.jpg',
		prod_year: 2016
		},
	{
		name: 'Temple Of Justice 1',
		desc: 'Omotola is a woman of justice always defending people that needs help and she loves what she does because she fights for justice.',
		ratings: 5,
		top_acts: ['Omotola Jalade Ekheinde'],
		genre: ['Family', 'Drama'],
		image: '/images/temple_of_justice_1.jpg',
		prod_year: 2015
		},
	{
		name: 'Temple of Justice 2',
		desc: 'A young lady lawyer is out to fight for justice for the widows and people in need of her help but she finds herself in a dilemma when her father in law is a culprist of a crime and she needs to defend the other ',
		ratings: 5,
		top_acts: ['Omotola Jalade Ekheinde'],
		genre: ['Family', 'Drama', 'Passion'],
		image: '/images/temple_of_justice_2.jpg',
		prod_year: 2015
	},
	{
		name: 'Hand Of Destiny Season 1',
		desc: 'Nothing would make Jake, a playboy to drop the game, not even Keila his fiance, but when he meets Nora in a business arrangement he knew there is something about her that he finds irresistible.',		ratings: 5,
		top_acts: ['Mike Ezuruonye','Ini edo','Mercy Johnson','Kalu Ikaegwu','Tonto dike'],
		genre: ['Family', 'Drama', 'Passion'],
		image: '/images/promise_of_love1.jpg',
		prod_year: 2015

	},
	{
		name: 'Hand Of Destiny Season 2',
		desc: 'Nothing would make Jake, a playboy to drop the game, not even Keila his fiance, but when he meets Nora in a business arrangement he knew there is something about her that he finds irresistible.',
		ratings: 5,
		top_acts: ['Mike Ezuruonye','Ini edo','Mercy Johnson','Kalu Ikaegwu','Tonto dike'],
		genre: ['Family', 'Drama', 'Passion'],
		image: '/images/promise_of_love1.jpg',
		prod_year: 2015
	}]
	});
};

/* Get 'Movie info' page */
module.exports.movieInfo = function(req, res){
	res.render('movie', {title: 'Movie information'});
};

/* Get 'Add review' page */
module.exports.addReview = function(req, res){
	res.render('movie-review-form', {title: 'Movie review'});
};