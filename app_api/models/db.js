var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI ='mongodb://localhost/ngmoviedb';
if(process.env.NODE_ENV === 'production'){
	dbURI ='mongodb://heroku_kddt8q8p:erttuthjqqhd03qt39temqihkh@ds111748.mlab.com:11748/heroku_kddt8q8p';
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
	console.log('Mongoose is connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose Connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose Disconnected');
});

gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};
//for nodemon shurdown
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

//for app termination
process.on('SIGINT', function(){
	gracefulShutdown('App termination', function(){
		process.exit(0);
	});
});

//fo heroku app termination
process.on('SIGTERM', function(){
	gracefulShutdown('Heroku App Shutdown', function (){
		process.exit(0);
	});
});

require('./movies');