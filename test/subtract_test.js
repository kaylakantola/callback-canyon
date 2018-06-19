import test from 'tape'
import subtract from '../src/subtract'

test('subtract should subtract the second value from the first value', assert => {
  assert.ok(subtract(5, 1) === 4)
  assert.ok(subtract(1, 3) === -2)
  assert.ok(subtract(0, 0) === 0)
  assert.end()
})
