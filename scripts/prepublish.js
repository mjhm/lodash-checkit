
var fs = require('fs');
var rewire = require('rewire');
var _ = rewire('../');


var lodashNativeDict = _.__get__('lodashNativeDict');
var checkitRegexDict = _.__get__('checkitRegexDict');
var checkitOtherDict = _.__get__('checkitOtherDict');
var lodashCaseDict = _.__get__('lodashCaseDict');
var notDict = _.__get__('notDict');

var all = _.assign({}, lodashNativeDict, checkitRegexDict, checkitOtherDict, lodashCaseDict, notDict);

var out = [
  '# Lodash-Checkit "isXxxx" function list',
  '| Name | From |',
  '| ---  | ---  |'
];

Object.keys(all).sort().forEach(function (fnName) {
  out.push('| ' + fnName + ' | ' + all[fnName] + ' |');
});
out.push('');

fs.writeFileSync('./IS_LIST.md', out.join('\n'));
