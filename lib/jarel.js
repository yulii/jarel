'use strict';

const Tuple = require('./tuple');

class Jarel {
  constructor() {
    this.relations = {};
  }

  rel(key, tuples) {
    this.relations[key] = tuples.map(function(t) { return new Tuple(t) });
  }
}

module.exports = Jarel
