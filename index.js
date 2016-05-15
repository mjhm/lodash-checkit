var lodash = require('lodash');
var Checkit = require('checkit');

var lodashNativeDict = {};
var checkitRegexDict = {};
var checkitOtherDict = {};
var lodashCaseDict = {};

Object.keys(lodash).filter(function (fn) { return /^is/.test(fn); }).forEach(function (key) {
  lodashNativeDict[key] = 'inherited from lodash module';
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
  var fnName = 'is' + lodash.upperFirst(k);
  if (fnName === 'isContains') fnName = 'isContainerFor'
  if (fnName === 'isRange') fnName = 'isInRange'
  if (re) {
    checkitRegexDict[fnName] = "from Checkit module's regex validator " + k
    testFn = function (s) { return re.test(s); }
  } else {
    checkitOtherDict[fnName] = "from Checkit module's validator " + k
    testFn = validatorInstance[k].bind(validatorInstance);
  }

  checkitMixins[fnName] = testFn;
});

// Add check methods for all of lodash "...Case" conversion methods.
Object.keys(lodash).forEach(function (ldKey) {
  if (/Case$/.test(ldKey)) {
    var testFn = function (s) {
      if(typeof s !== 'string') return false
      return s === lodash[ldKey](s);
    };
    var fnName = 'is' + lodash.upperFirst(ldKey)
    lodashCaseDict[fnName] = 'from lodash "...Case" function';
    checkitMixins[fnName] = testFn;
  }
});

var checkitValidator

module.exports = lodash.runInContext().mixin(checkitMixins);
