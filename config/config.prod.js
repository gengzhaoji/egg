/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  const userConfig = {
    myAppName: 'egg',
  };

  config.cluster = {
    listen: {
      port: 5000
    }
  };
  return {
    ...config,
    ...userConfig
  };
};
