'use strict';

var _ = require('lodash');
var data = [];

function add (name, text) {
  data.push({ name: name, text: text, id: data.length });
  return _.clone(data[data.length - 1]);
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Trish', 'Kate', 'Kristi', 'Erin', 'Rachel', 'Meaghan', 'Sarah'];
  var fakeLasts = ['Clollure', 'Phunktional', 'Rhuntyme', 'Reehact', 'OFactor'];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName() );
}