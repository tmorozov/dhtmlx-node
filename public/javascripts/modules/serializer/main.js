app.module('serializer', function(mod, sandbox) {

	sandbox.on('contact:create', function (data) {
		sandbox.post('/users/', data)
			.done(function (data) {
				sandbox.trigger('contact:created', data);
			});
	});

	sandbox.on('contact:delete', function (id) {
		if (!id) {
			return;
		}

		sandbox.del('/users/'+id)
			.done(function (data) {
				sandbox.trigger('contact:deleted', id);
			});
	});

	sandbox.on('contact:update', function (data) {
		sandbox.put('/users/'+data.id, data)
			.done(function (data) {
				sandbox.trigger('contact:updated', data);
			});
	});

});
