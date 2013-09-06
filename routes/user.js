var url = require('url');
/*
 * GET users listing.
 */

var users = [{
		id: 1,
		"name": "Вася",
		"last_name": "Пупкин",
		"email": "vp@google.com"
	}, {
		id: 2,
		"name": "Иван",
		"last_name": "Иванов",
		"email": "ii@google.com"
	}
];
var next_id = 3;

function getUserById(id) {
	var key = +id;
	var l = users.length;
	for (var i=0; i<l; i++) {
		if(users[i].id === key) {
			return users[i];
		}
	}
}

function delUserById(id) {
	var key = +id;
	var l = users.length;
	for (var i=0; i<l; i++) {
		if (users[i].id === key) {
			users.splice(i, 1);
			return;
		}
	}
}


exports.list = function(req, res){

	var url_parts = url.parse(req.url, true);
	var mask = url_parts.query.mask;
	var filteredUsers = users;
	if (mask) {
		var re = RegExp(
			mask.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
			'i'
		);

		filteredUsers = users.filter(function(item){
			return item.name.search(re) !=-1;
		})
	}

	var data = {
		"total_count":users.length,
		"pos":0,
		"data": filteredUsers
	};
	res.send(data);
};

exports.show = function(req, res){
	var user = getUserById(req.params.id);
	res.send(user);
};

exports.update = function(req, res){
	var user = getUserById(req.params.id);
	var update = req.body;
	if(user) {
		user.name = update.name;
		user.last_name = update.last_name;
		user.email = update.email;
	}

	res.send(user);
};

exports.del = function(req, res){
	delUserById(req.params.id);
	res.send({});
};

exports.create = function(req, res){
	var update = req.body;

	var user = {
		id: next_id,
		name: update.name,
		last_name: update.last_name,
		email: update.email
	};

	next_id++;

	users.push(user);

	res.send(user);
};
