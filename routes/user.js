
/*
 * GET users listing.
 */

var data  = {
	"total_count":10,
	"pos":0,
	"data":[{
			"name": "Вася",
			"last_name": "Пупкин",
			"email": "vp@google.com"
		}, {
			"name": "Иван",
			"last_name": "Иванов",
			"email": "ii@google.com"
		}
	]
};

exports.list = function(req, res){
	res.send(data);
};

exports.show = function(req, res){
	res.send(data.data[req.params.id-1]);
};
