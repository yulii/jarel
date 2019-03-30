import test from 'ava'
import Fixture from './_fixture.js';
import Jarel from '../lib/jarel.js';

test('Tuple#new return a instance.', t => {
  var jarel = new Jarel();
  jarel.rel('users', Fixture.users);
  t.truthy(jarel.relations['users']);
})
