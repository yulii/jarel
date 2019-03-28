'use strict';

class Tuple {
  constructor(object) {
    this.object = object;
  }

  fetch(...attributes) {
    return attributes.reduce(function(t, key) {
      return (t && t[key] !== 'undefined') ? t[key] : undefined
    }, this.object);
  }
}

module.exports = Tuple
