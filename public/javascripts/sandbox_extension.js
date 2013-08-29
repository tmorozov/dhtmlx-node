
(function(root, $) {
	function _ajax_request(url, data, callback, type, method) {
		if ($.isFunction(data)) {
			callback = data;
			data = {};
		}
		return $.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	}

	var sandbox = {
		get: $.get,
		post: $.post,
		put: function(url, data, callback, type) {
			return _ajax_request(url, data, callback, type, 'PUT');
		},
		del: function(url, data, callback, type) {
			return _ajax_request(url, data, callback, type, 'DELETE');
		}
	};

	root.sandbox_extension = sandbox;

})(this, $);
