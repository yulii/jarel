import test from 'ava'
import Fixture from './_fixture.js';
import Tuple from '../lib/tuple.js';

test('Tuple#fetch return a value when the argument is single key.', t => {
  var tuple = new Tuple(Fixture.colors[0]);
  t.is(tuple.fetch('color'), 'black');
})

test('Tuple#fetch return a value when the argument is multi keys.', t => {
  var tuple = new Tuple(Fixture.colors[0]);
  t.deepEqual(tuple.fetch('code', 'rgba'), [255,255,255,1]);
})

test('Tuple#fetch return a value when the argument is complex keys.', t => {
  var tuple = new Tuple(Fixture.colors[0]);
  t.is(tuple.fetch('code', 'rgba', 2), 255);
})

test('Tuple#fetch return undefined when keys not found.', t => {
  var tuple = new Tuple(Fixture.colors[0]);
  t.is(tuple.fetch('code', 'rgba', 5), undefined);
})

test('Tuple#slice return a object when the argument is single keys.', t => {
  var tuple = new Tuple(Fixture.colors[0]);
  t.deepEqual(tuple.slice('code.rgba'), {
    code: { rgba: [255,255,255,1] }
  });
})

test('Tuple#slice return a object when the argument is multi keys.', t => {
  var tuple = new Tuple(Fixture.colors[0]);
  t.deepEqual(tuple.slice('code.hex', 'color'), {
    color: 'black',
    code: { hex: '#000' }
  });
})
