var express = require('express');
var router = express.Router();
var resemble = require('node-resemble');

var JSON = 'application/json';

router.post('/', function(req, res, next) {
	if (req.is(JSON) && req.accepts(JSON)) {
		try {
			if (typeof req.body.images.before === 'string' && typeof req.body.images.after === 'string') {
				var before = new Buffer(req.body.images.before.split(",")[1], 'base64');
				var after = new Buffer(req.body.images.after.split(",")[1], 'base64');
	
				resemble(before).compareTo(after).onComplete(function(data){
					var resData = data;
					resData.imageDataUrl = data.getImageDataUrl();			
					res.json(resData);
				});
			} else {
				throw new Error("Invalid JSON schema");
			}
		} catch(error) {
			next(error);
		}
	} else {
		next(new Error('Invalid sent/accepted content type.'));
	}
});



module.exports = router;
