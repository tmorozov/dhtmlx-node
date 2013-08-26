var expect = chai.expect;

describe('Core', function() {
	describe('Application', function() {
		var a;
		beforeEach(function () {
			a = new core.Application({
				test: 'test'
			});
		});

		describe('#module', function() {
			it('should be a function', function () {
				expect(a.module).to.be.a('function');
			});

			it('should create a module by name', function () {
				var m1 = a.module('m1');
				expect(m1).to.be.a('object');
			});

			it('should access a module by name', function () {
				var m1 = a.module('m1');
				var m2 = a.module('m1');
				expect(m1).to.be.equal(m2);
			});

			it('should extend a module by callback', function () {
				var m1 = a.module('m1', function(mod) {
					mod.a = '1';
					mod.f = function() {};
				});

				expect(m1.a).to.equal('1');
				expect(m1.f).to.be.a('function');
			});

			it('should extend a module one by one', function () {
				var m1 = a.module('m1', function(mod) {
					mod.a = '1';
				});

				var m2 = a.module('m1', function(mod) {
					mod.f = function() {};
				});

				expect(m2.a).to.equal('1');
				expect(m2.f).to.be.a('function');
			});

			it('should pass sandbox as callback param', function () {
				var m1 = a.module('m1', function(mod, sandbox) {
					mod.sb = sandbox;
				});

				expect(m1.sb).to.equal(a.sandbox);
				expect(m1.sb.test).to.equal('test');
			});

		});

		describe('Module', function() {
			var mod;
			beforeEach(function() {
				mod = a.module('mod_1');
			});

			it('should support Observer', function () {
				expect(mod.on).to.be.a('function');
				expect(mod.trigger).to.be.a('function');
			});

			it('should support Initializer', function () {
				expect(mod.start).to.be.a('function');
				expect(mod.addInitializer).to.be.a('function');
			});

			it('should call initializers on start', function (done) {
				a.module('mod_1', function(mod) {
					mod.addInitializer(done);
				});
				mod.start();
			});

			it('should call initializers on app.start', function (done) {
				a.module('mod_1', function(mod) {
					mod.addInitializer(done);
				});
				a.start();
			});
		});

	});
});
