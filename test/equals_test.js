import test from 'tape'
import equals from '../src/equals'

test('equals should compare two values and return true or false', assert => {
  assert.ok(equals(1, 1))
assert.notOk(equals(true, false))
assert.ok(equals('hello', 'hello'))
  assert.end()
})
