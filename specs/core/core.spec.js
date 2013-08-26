var expect = chai.expect;

describe('Core', function() {
	it('should be defined', function() {
		expect(core).to.be.ok;
	});

	describe('#extend', function() {
		it('should be a function', function () {
			expect(core.extend).to.be.a('function');
		});

		it('should extend object', function () {
			var a = {
				a: "aa",
				f: function() {}
			};

			var b = core.extend({}, a);

			expect(b.a).to.equal('aa');
			expect(b.f).to.be.a('function');
		});
	});
});
