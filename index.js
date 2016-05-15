var lodash = require('lodash');
var Checkit = require('checkit');

var lodashNativeDict = {};
Object.keys(lodash).filter(function (fn) { return /^is/.test(fn); }).forEach(function (key) {
  lodashNativeDict[key] = true;
});

var validatorInstance = new Checkit.Validator(null, {language: 'en'});
var checkitKeys = Object.keys(Checkit.Regex).concat(Object.keys(Checkit.Validator.prototype));
var checkitMixins = {};
checkitKeys.forEach(function (k) {
  var testFn;
  if (lodashNativeDict[k]) return;
  if (k === 'accepted') return;
  if (k === 'matchesField') return;
  var re = Checkit.Regex[k];
  if (re) {
    testFn = function (s) { return re.test(s); }
  } else {
    testFn = validatorInstance[k].bind(validatorInstance);
  }
  var fnName = 'is' + lodash.upperFirst(k);
  if (fnName === 'isContains') fnName = 'isContainerFor'
  if (fnName === 'isRange') fnName = 'isInRange'

  checkitMixins[fnName] = testFn;
});

// Add check methods for all of lodash "...Case" conversion methods.
Object.keys(lodash).forEach(function (ldKey) {
  if (/Case$/.test(ldKey)) {
    var testFn = function (s) {
      if(typeof s !== 'string') return false
      return s === lodash[ldKey](s);
    };
    checkitMixins['is' + lodash.upperFirst(ldKey)] = testFn;
  }
});

var checkitValidator

module.exports = lodash.runInContext().mixin(checkitMixins);
