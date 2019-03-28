'use strict';

const fs   = require('fs');
const path = require('path');

var Fixture = {};

var FixtureReader = function() {};

FixtureReader.listFiles = function(dir) {
  return fs.readdirSync(dir).map(function(file) {
    return path.join(dir, file)
  }).filter(function(fp) {
    return fs.statSync(fp).isFile() && /\.json$/.test(fp);
  });
}

FixtureReader.load = function(dir) {
  this.listFiles(dir).forEach(function(fp) {
    const fi = path.parse(fp);
    const json = fs.readFileSync(fp, 'utf8');
    Fixture[fi.name] = JSON.parse(json);
  });
};

FixtureReader.load('./test/fixture');

module.exports = Fixture;
