var lodash = require('lodash');
var Checkit = require('checkit');
var lodashCheckit = lodash.runInContext();

var checkitRegexMixins = lodash.mapKeys(
  lodashCheckit.mapValues(Checkit.Regex, function (re, reKey) {
    return function (s) {
      return re.test(s)
    };
  }),
function (reFn, reKey) {
  return 'is' + lodash.upperFirst(reKey);
});

lodashCheckit.mixin(checkitRegexMixins);

module.exports = lodashCheckit
