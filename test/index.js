import { expect } from 'chai';
import app from '../src';

describe('defining an interface', () => {
  it('should return a function', () => {
    const result = app(['wheels', 'doors']);
    expect(result).to.be.a('function');
  });

  describe('conforming to interface', () => {
    it('should return an object', () => {
      const car = app(['wheels', 'doors']);
      const object = {
        wheels: 3,
        doors: 2,
      };
      const hooptie = car(object);

      expect(hooptie).to.equal(object);
    });
  });

  describe('missing fields', () => {
    it('should throw "missing field(s)"', () => {
      const car = app(['wheels', 'doors']);
      const object = {
        wheels: 2,
      };
      const fn = () => { car(object); };

      expect(fn).to.throw('doors');
    });
  });

  describe('superfluous fields', () => {
    it('should throw "superfluous field(s)"', () => {
      const car = app(['wheels', 'doors']);
      const object = {
        wheels: 4,
        doors: 2,
        cab: 'extended',
      };
      const fn = () => { car(object); };

      expect(fn).to.throw('cab');
    });
  });
});
