var expect = chai.expect;

describe('Core', function() {
	describe('Application', function() {
		it('should be constructor', function () {
			expect(core.Application).to.be.a('function');
		});

		describe('prototype', function () {
			var proto = core.Application.prototype;

			describe('initializers', function () {
				it('should have #addInitializer', function () {
					expect(proto.addInitializer).to.be.a('function');
				});

				it('should have #start', function () {
					expect(proto.start).to.be.a('function');
				});
			});

			describe('Observer', function() {
				it('should have #on', function () {
					expect(proto.on).to.be.a('function');
				});

				it('should have #trigger', function () {
					expect(proto.trigger).to.be.a('function');
				});
			});

		});

		describe('on #start', function () {
			var app;
			var options = {
				a: "aa",
				f: function () {}
			};

			it('should call initializers', function (done) {
				app = new core.Application();
				app.addInitializer(done);
				app.start();
			});

			it('should pass options', function (done) {
				app = new core.Application();
				app.addInitializer(function(opt) {
					expect(opt).to.equal(options);
					done();
				});
				app.start(options);
			});

		});
	});
});

