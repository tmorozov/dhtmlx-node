(function() {
	var root = this;
	var core = {};

	root.core = core;

	var slice = [].slice;

	core.extend = function(obj) {
		slice.call(arguments, 1).forEach( function(source) {
			if (source) {
				for (var prop in source) {
					obj[prop] = source[prop];
				}
			}
		});

		return obj;
	};

	// Observer
	// on/off/trigger
	core.Observer = {
		on: function(name, callback) {
			this._events || (this._events = {});
			var events = this._events[name] || (this._events[name] = []);
			if(events.indexOf(callback) === -1) {
				events.push({
					callback: callback
				});
			}
			return this;
		},

		trigger: function (name) {
			if (!this._events){
				return this;
			}

			var events = this._events[name];
			if (events) {
				var args = slice.call(arguments, 1);
				var i = -1;
				var l = events.length;
				while (++i < l) {
					(ev = events[i]).callback.apply(this, args);
				}
			}
			
		}
	}

	// Application
	// start/stop
	core.Application = function () {
	}

	core.extend(core.Application.prototype, core.Observer, {
		addInitializer: function(func) {
			var callbacks = this._initializers = this._initializers || [];
			if(callbacks.indexOf(func) === -1) {
				callbacks.push(func);
			}
			return this;
		},

		start: function(options) {
			var callbacks = this._initializers;
			if(callbacks) {
				var l = callbacks.length;
				var i = -1;
				while(++i < l) {
					callbacks[i](options);
				}
			}
		}
	});

}).call(this);



// Module: Events
// multifile
// start/stop

// Application
// start/stop
