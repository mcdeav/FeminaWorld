var routes = {};
routes.create = function(app){
	app.get('/api/signup', authenticationController.signup);
	//Login Post  
	app.post('/api/login', authenticationController.login);
};

module.exports= routes;