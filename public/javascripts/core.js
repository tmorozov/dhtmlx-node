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

}).call(this);


// Events(Observer)
// on/off/trigger

// Module: Events
// multifile
// start/stop

// Application: Module
// start/stop
