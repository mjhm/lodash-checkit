# lodash-checkit

![CircleCI badge](https://circleci.com/gh/Originate/lodash-checkit.svg?style=shield&circle-token=:circle-token)
[![lodash-checkit](https://img.shields.io/npm/v/lodash-checkit.svg)](https://www.npmjs.com/package/lodash-checkit)

Related modules: [![lodash-match-pattern](https://img.shields.io/npm/v/lodash-match-pattern.svg?label=lodash-match-pattern)](https://www.npmjs.com/package/lodash-match-pattern)
[![chai-match-pattern](https://img.shields.io/npm/v/chai-match-pattern.svg?label=chai-match-pattern)](https://www.npmjs.com/package/chai-match-pattern)


This is an extension of lodash with extra `isXxxx` methods from the Checkit module, along with `is...Case` methods derived from the lodash case conversion methods. All functions have corresponding `isNotXxxx` methods as well.

- [`lodash` module details](https://lodash.com/docs)
- [`checkit` module details](https://github.com/tgriesser/checkit)

# Lodash-Checkit "isXxxx" function list
| Name | From |
| ---  | ---  |
| isAlpha | checkit "alpha" regex //^[a-z]+$/i/ |
| isAlphaDash | checkit "alphaDash" regex //^[a-z0-9_\-]+$/i/ |
| isAlphaNumeric | checkit "alphaNumeric" regex //^[a-z0-9]+$/i/ |
| isAlphaUnderscore | checkit "alphaUnderscore" regex //^[a-z0-9_]+$/i/ |
| isArguments | lodash |
| isArray | lodash |
| isArrayBuffer | lodash |
| isArrayLike | lodash |
| isArrayLikeObject | lodash |
| isBase64 | checkit "base64" regex //^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$// |
| isBetween | checkit validator "between" |
| isBoolean | lodash |
| isBuffer | lodash |
| isCamelCase | lodash "camelCase" |
| isContainerFor | checkit validator "contains" |
| isDate | lodash |
| isDifferent | checkit validator "different" |
| isElement | lodash |
| isEmail | checkit "email" regex //^(.+)@(.+)\.(.+)$/i/ |
| isEmpty | lodash |
| isEqual | lodash |
| isEqualWith | lodash |
| isError | lodash |
| isExactLength | checkit validator "exactLength" |
| isExists | checkit validator "exists" |
| isFinite | lodash |
| isFunction | lodash |
| isGreaterThan | checkit validator "greaterThan" |
| isGreaterThanEqualTo | checkit validator "greaterThanEqualTo" |
| isInRange | checkit validator "range" |
| isInteger | lodash |
| isIpv4 | checkit "ipv4" regex //^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i/ |
| isIpv6 | checkit "ipv6" regex //^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i/ |
| isKebabCase | lodash "kebabCase" |
| isLength | lodash |
| isLessThan | checkit validator "lessThan" |
| isLessThanEqualTo | checkit validator "lessThanEqualTo" |
| isLowerCase | lodash "lowerCase" |
| isLuhn | checkit "luhn" regex //^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$// |
| isMap | lodash |
| isMatch | lodash |
| isMatchWith | lodash |
| isMaxLength | checkit validator "maxLength" |
| isMinLength | checkit validator "minLength" |
| isNaN | lodash |
| isNative | lodash |
| isNatural | checkit "natural" regex //^[0-9]+$/i/ |
| isNaturalNonZero | checkit "naturalNonZero" regex //^[1-9][0-9]*$/i/ |
| isNil | lodash |
| isNotAlpha | not "isAlpha" |
| isNotAlphaDash | not "isAlphaDash" |
| isNotAlphaNumeric | not "isAlphaNumeric" |
| isNotAlphaUnderscore | not "isAlphaUnderscore" |
| isNotBase64 | not "isBase64" |
| isNotBetween | not "isBetween" |
| isNotCamelCase | not "isCamelCase" |
| isNotContainerFor | not "isContainerFor" |
| isNotDifferent | not "isDifferent" |
| isNotEmail | not "isEmail" |
| isNotExactLength | not "isExactLength" |
| isNotExists | not "isExists" |
| isNotGreaterThan | not "isGreaterThan" |
| isNotGreaterThanEqualTo | not "isGreaterThanEqualTo" |
| isNotInRange | not "isInRange" |
| isNotIpv4 | not "isIpv4" |
| isNotIpv6 | not "isIpv6" |
| isNotKebabCase | not "isKebabCase" |
| isNotLessThan | not "isLessThan" |
| isNotLessThanEqualTo | not "isLessThanEqualTo" |
| isNotLowerCase | not "isLowerCase" |
| isNotLuhn | not "isLuhn" |
| isNotMaxLength | not "isMaxLength" |
| isNotMinLength | not "isMinLength" |
| isNotNatural | not "isNatural" |
| isNotNaturalNonZero | not "isNaturalNonZero" |
| isNotNumeric | not "isNumeric" |
| isNotRequired | not "isRequired" |
| isNotSnakeCase | not "isSnakeCase" |
| isNotStartCase | not "isStartCase" |
| isNotUpperCase | not "isUpperCase" |
| isNotUrl | not "isUrl" |
| isNotUuid | not "isUuid" |
| isNull | lodash |
| isNumber | lodash |
| isNumeric | checkit validator "numeric" |
| isObject | lodash |
| isObjectLike | lodash |
| isPlainObject | lodash |
| isRegExp | lodash |
| isRequired | checkit validator "required" |
| isSafeInteger | lodash |
| isSet | lodash |
| isSnakeCase | lodash "snakeCase" |
| isStartCase | lodash "startCase" |
| isString | lodash |
| isSymbol | lodash |
| isTypedArray | lodash |
| isUndefined | lodash |
| isUpperCase | lodash "upperCase" |
| isUrl | checkit "url" regex //^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$// |
| isUuid | checkit "uuid" regex //^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i/ |
| isWeakMap | lodash |
| isWeakSet | lodash |
