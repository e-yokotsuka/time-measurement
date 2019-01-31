'use strict';
const {performance} = require('perf_hooks');
module.exports = (func = () => {},logOutFunc = () => {},name = "") => {
  const startTime = performance.now();
  func();
  const t = Math.round(performance.now() - startTime);
  logOutFunc(`${name}${name && "="}${t}msec`);
};
