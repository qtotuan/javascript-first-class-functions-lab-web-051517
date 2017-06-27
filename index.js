function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function multiplierValue(number1) {
  return function(number2) {
    return number1 * number2
  }
}

function createMultiplier(value) {
  return multiplierValue(value)
}

doubler = createMultiplier(2)
tripler = createMultiplier(3)

// console.log(doubler(6))

function multiplier(number1, number2) {
  return number1 * number2
}

doublerWithBind = multiplier.bind(null, 2)
triplerWithBind = multiplier.bind(null, 3)
