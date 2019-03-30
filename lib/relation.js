'use strict';

const Tuple = require('./tuple');

class Relation {
  constructor(tuples) {
    this.tuples = tuples.map(function(t) { return new Tuple(t) });
  }

  project(...attributes) {
    return this.tuples.map(function(t) { return t.slice(...attributes) });
  }
}

module.exports = Relation
