
'use strict';

var chai = require('chai');
var util = require('util');
var lodash = require('lodash');
var rewire = require('rewire');
var _ = rewire('../');
var expect = chai.expect;

describe('lodash-checkit', function () {
  describe('regex checks', function () {
    describe('#isEmail', function () {
      it('returns true for a valid email', function() {
        return expect(_.isEmail('ab@cd.co')).to.be.true;
      });
      it('returns false for an invalid email', function() {
        return expect(_.isEmail('ab.cd.co')).to.be.false;
      });
    });
    describe('#isNotEmail', function () {
      it('returns false for a valid email', function() {
        return expect(_.isNotEmail('ab@cd.co')).to.be.false;
      });
      it('returns true for an invalid email', function() {
        return expect(_.isNotEmail('ab.cd.co')).to.be.true;
      });
    });
  });
  describe('other checkit validators', function () {
    describe('#isInRange', function () {
      it('returns true for a number within a range', function () {
        return expect(_.isInRange(3, 2, 5)).to.be.true;
      });
      it('returns false for a number before a range', function () {
        return expect(_.isInRange(1, 2, 5)).to.be.false;
      });
      it('returns false for a number after a range', function () {
        return expect(_.isInRange(6, 2, 5)).to.be.false;
      });
      it('returns true for a number on the boundary', function () {
        return expect(_.isInRange(5, 2, 5)).to.be.true;
      });
    });
    describe('#isNotInRange', function () {
      it('returns false for a number within a range', function () {
        return expect(_.isNotInRange(3, 2, 5)).to.be.false;
      });
      it('returns true for a number before a range', function () {
        return expect(_.isNotInRange(1, 2, 5)).to.be.true;
      });
    });
    describe('#isBetween', function () {
      it('returns false for a number on the boundary', function () {
        return expect(_.isBetween(5, 2, 5)).to.be.false;
      });
    });
    describe('#isRequired (non falsey or 0)', function() {
      it('returns true for 0', function() {
        return expect(_.isRequired(0)).to.be.true;
      });
      it('returns true for "whatever"', function() {
        return expect(_.isRequired('whatever')).to.be.true;
      });
      it('returns false for ""', function() {
        return expect(_.isRequired('')).to.be.false;
      });
      it('returns false for undefined', function() {
        return expect(_.isRequired(undefined)).to.be.false;
      });
    });
    describe('#isContainerFor (from checkit "contains")', function () {
      it('supports array containment', function() {
        return expect(_.isContainerFor([1, 2, 3], 2)).to.be.true;
      });
      it('supports string containment', function() {
        return expect(_.isContainerFor('abcdef', 'cd')).to.be.true;
      });
      it('supports key membership for objects', function() {
        return expect(_.isContainerFor({a: 1, b: 2}, 'b')).to.be.true;
      });
      it('fails for missing key', function() {
        return expect(_.isContainerFor({a: 1, b: 2}, 'c')).to.be.false;
      });
    });
    describe('added "...Case" validators', function () {
      describe('#isCamelCase', function () {
        return expect(_.isCamelCase('abcDefGhi')).to.be.true;
      });
      describe('#isCamelCase', function () {
        return expect(_.isCamelCase('AbcDefGhi')).to.be.false;
      });
    });
  });
  describe('does not override native lodash functions', function () {
    beforeEach(function () {
      this.checkitMixins = _.__get__('checkitMixins');
    });
    it('added functions were added through checkitMixin', function () {
      expect(this.checkitMixins).has.property('isEmail');
      return expect(_.isEmail).to.equal(this.checkitMixins.isEmail);
    });
    it('isInteger was not added through the mixin', function () {
      return expect(this.checkitMixins).not.to.have.property('isInteger');
    });
  });
});
