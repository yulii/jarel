'use strict';

class Tuple {
  constructor(object) {
    this.object = object;
  }

  fetch(attribute) {
    return attribute.split('.').reduce(function(t, key) {
      return (t && t[key] !== 'undefined') ? t[key] : undefined
    }, this.object);
  }

  slice(...attributes) {
    var obj = {};
    for (let attr of attributes) {
      Object.assign(obj, this._dig(this.object, ...attr.split('.')));
    }
    return obj;
  }

  _dig(obj, ...keys) {
    var k = keys[0];
    if (keys.length == 1) { return { [k]: obj[k] }; }
    return { [k]: this._dig(obj[k], keys.slice(1)) };
  }
}

module.exports = Tuple
