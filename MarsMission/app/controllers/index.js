//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Index related controller
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.init = function(app) {
		app.get('/', function(req, res){
			res.render('index', { socketURL:req.headers.host });
		});
}