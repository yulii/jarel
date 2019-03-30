'use strict';

const Relation = require('./relation');

class Jarel {
  constructor() {
    this.relations = {};
  }

  rel(key, tuples) {
    this.relations[key] = new Relation(tuples);
  }
}

module.exports = Jarel
