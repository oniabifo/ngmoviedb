module.exports.tvshows = function(req, res){
	res.render('index', { title: 'Tv Shows'});
};
module.exports.tvInfo = function(req, res){
	res.render('index', { title: 'Tv Info'});
};

module.exports.addReview = function(req, res){
	res.render('index', {title: 'Tv review'});
};