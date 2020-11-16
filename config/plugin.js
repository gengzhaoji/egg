'use strict';

/** @type Egg.EggPlugin */

exports.static = true;

exports.session = true;

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.io = {
  enable: true,
  package: 'egg-socket.io',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};


