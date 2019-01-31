'use strict';
const {performance} = require('perf_hooks');
module.exports = (func = () => {}, name = "") => {
  const startTime = performance.now();
  func();
  const t = Math.round(performance.now() - startTime);
  console.log(`${name}${name && "="}${t}msec`);
};
