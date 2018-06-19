import test from 'tape'
import add from '../src/add'

test('add should return the sum of two numbers', assert => {
  assert.ok(add(1, 2) === 3)
  assert.notOk(add(1, 1) === 5)
  assert.ok(add(0, 0) === 0)
  assert.end()
})
