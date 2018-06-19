import test from 'tape'
import mulitply from '../src/multiply'

test('multiply should take two numbers, mulitply them, and return the result', assert => {
  assert.ok(mulitply(1, 2) === 2)
  assert.notOk(mulitply(1, 1) === 5)
  assert.ok(mulitply(0, 5) === 0)
  assert.end()
})
