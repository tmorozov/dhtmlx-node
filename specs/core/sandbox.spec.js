var expect = chai.expect;

describe('Core', function() {
	describe('Application', function() {
		describe('sandbox', function() {
			var a;
			var sb = {
				a: "111",
				f: function() {}
			};
			beforeEach(function () {
				a = new core.Application(sb);
			});

			it('should be defined', function () {
				expect(a.sandbox).to.be.ok;
			});

			it('should be extended by params', function () {
				expect(a.sandbox.a).to.be.equal("111");
				expect(a.sandbox.f).to.be.a('function');
			});

			it('should be Observer', function () {
				expect(a.sandbox.on).to.be.a('function');
				expect(a.sandbox.trigger).to.be.a('function');
			});
		});
	});
});
