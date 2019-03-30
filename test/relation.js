import test from 'ava'
import Fixture from './_fixture.js';
import Relation from '../lib/relation.js';

test('Relation#project return a relation.', t => {
  var relation = new Relation(Fixture.colors);
  t.deepEqual(relation.project('code.hex', 'color'), [
    { color: "black",  code: { hex: "#000" } },
    { color: "white",  code: { hex: "#FFF" } },
    { color: "red",    code: { hex: "#FF0" } },
    { color: "blue",   code: { hex: "#00F" } },
    { color: "yellow", code: { hex: "#FF0" } },
    { color: "green",  code: { hex: "#0F0" } }
  ]);
})
