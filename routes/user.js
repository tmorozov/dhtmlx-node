
/*
 * GET users listing.
 */

var users = [{
		"name": "Вася",
		"last_name": "Пупкин",
		"email": "vp@google.com"
	}, {
		"name": "Иван",
		"last_name": "Иванов",
		"email": "ii@google.com"
	}
];

exports.list = function(req, res){
	var data = {
		"total_count":users.length,
		"pos":0,
		"data": users
	};
	res.send(data);
};

exports.show = function(req, res){
	var user = users[req.params.id-1];
	res.send(user);
};

exports.update = function(req, res){
	var user = users[req.params.id-1];
	var update = req.body;

	user.name = update.name;
	user.last_name = update.last_name;
	user.email = update.email;

	res.send(user);
};

exports.create = function(req, res){
	var update = req.body;

	var user = {
		name: update.name,
		last_name: update.last_name,
		email: update.email
	};

	users.push(user);

	user = users[users.length-1];
	user.id = users.length;
	res.send(user);
};
