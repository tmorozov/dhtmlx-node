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

	core.Modulizer = {
		module: function (name, cb) {
			this._modules = this._modules || {};
			var mod = this._modules[name];
			if (!mod) {
				mod = core.extend({}, 
					core.Initializer,
					core.Observer
				);
			}
			if (cb) {
				cb.call(mod, mod, this.sandbox);
			}
			this._modules[name] = mod;
			return mod;
		}
	};

	core.Initializer = {
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

			var modules = this._modules;
			if (modules) {
				for(name in modules) {
					if (modules.hasOwnProperty(name)) {
						modules[name].start(options);
					}
				}
			}
		}
	};

	core.Application = function (sandbox) {
		this.sandbox = core.extend(core.Observer, sandbox || {});
	}

	core.extend(
		core.Application.prototype, 
		core.Initializer, 
		core.Modulizer
	);

}).call(this);
