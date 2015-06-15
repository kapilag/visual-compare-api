var express = require('express');
var router = express.Router();

var JSON = 'application/json';

router.post('/', function(req, res, next) {
	if (req.is(JSON) && req.accepts(JSON)) {
		try {
			var before = new Buffer(req.body.images.before.data, 'base64');
			var after = new Buffer(req.body.images.after.data, 'base64');
		} catch(e) {
			next(new Error('Can\'t parse Body'));
		}
		res.send('respond with json');
	} else {
		next(new Error('Invalid sent/accepted content type.'));
	}
});



module.exports = router;
