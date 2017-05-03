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
  var fakeFirsts = ['Harvard', 'Yale', 'Stanford', 'MIT', 'Dartmouth'];
  var fakeLasts = ['College', 'University', 'Tech', 'Institute', 'School'];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesomeAdj = ['new', 'overpriced', 'under investigation', 'far away', 'hard to get into', 'the best', 'expensive'];
  return 'This campus is ' + randArrayEl(awesomeAdj) + '. #GHAlove #codedreams';
};

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}