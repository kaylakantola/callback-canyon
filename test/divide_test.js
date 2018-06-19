import test from 'tape'
import divide from '../src/divide'

test('divide should take two numbers, divide the first by the second, and return the result', assert => {
  assert.ok(divide(1, 1) === 1)
  assert.ok(divide(4, 2) === 2)
  assert.notOk(divide(1, 1) === 5)
  assert.ok(divide(0, 5) === 0)
  assert.end()
})
