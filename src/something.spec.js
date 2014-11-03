
import {Something} from './something';

describe('something', function() {
  var something;

  beforeEach(function() {
    something = new Something();
  });

  it('should work', function() {
    expect(something.sum(1, 2)).to.be.equal(3);
  });

  it('should silently fail', function() {
      expect(() => something.sum(1, 'invalid')).to.throw(Error, /Invalid arguments given!/);
  });
});

