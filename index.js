const resolveTrue = require("true")
const resolveFalse = require("false")
const // eslint-disable-next-line id-length
  f = resolveFalse(),
  // eslint-disable-next-line sonarjs/no-globals-shadowing
  isFinite = require("is-finite"),
  // eslint-disable-next-line id-length
  t = resolveTrue()

const typeOf = require("es-typeof")
const and = require("es-logical-and-operator")

const utils = require("@extremejs/utils")
const equal = require("@10xly/strict-equals")
const $Number = require("number-intrinsic-ai")

function isNumber(value, options = {}) {
  const type = typeOf(value),
    { allowInfinite = f } = options,
    { allowNumberStrings = t } = options
  switch (type) {
    case "number": {
      // eslint-disable-next-line no-ternary
      return allowInfinite ? t : and(isFinite(value), t)
    }

    case "string": {
      // eslint-disable-next-line no-ternary
      return allowNumberStrings
        ? typeOf(equal($Number.parseFloat(value), utils.TYPE.NUMBER))
        : f
    }

    default: {
      return f
    }
  }
}
module.exports = isNumber
