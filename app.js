var express = require('express');
var helpers = require('./helpers');
var options = require('./options');
var app = express();
const port = process.env.PORT || 3000;

var jsonRouter = express.Router();

jsonRouter.route('/generate')
	.get(function(req, res) {
		var responseJson = helpers.fillManyValuesStrict(options.object, options.presets, options.itemsCount);
		res.json(responseJson);
	});

// app.use(function(req, res, next) {
// 	if(req.headers['x-forwarded-proto'] === 'http'){
// 		next();
// 	} else {
// 		res.redirect('http://' + req.hostname + req.url);
// 	}
// });


app.use('/api', jsonRouter);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
	console.log('Running on port ' + port);
})
