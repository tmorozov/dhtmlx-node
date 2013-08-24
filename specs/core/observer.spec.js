var expect = chai.expect;

describe('Core', function() {
	describe('Observer', function() {
		it('should be defined', function() {
			expect(core.Observer).to.be.defined;
		});

		it('should be object', function() {
			expect(core.Observer).to.be.a('object');
		});

		describe('#trigger', function () {
			it('should be a function ', function() {
				expect(core.Observer.trigger).to.be.a('function');
			});
		});

		describe('#on', function () {
			it('should be a function ', function() {
				expect(core.Observer.on).to.be.a('function');
			});
		});

		describe('on trigger path', function () {
			it('should call callback', function (done) {
				var a = core.extend({}, core.Observer);
				a.on('event', done);
				a.trigger('event');
			});
		});
	});
});
