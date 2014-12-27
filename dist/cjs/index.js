"use strict";
var __moduleName = "index";
var $__injector__ = require('./injector');
var $__annotations__ = require('./annotations');
module.exports = {
  get Injector() {
    return $__injector__.Injector;
  },
  get annotate() {
    return $__annotations__.annotate;
  },
  get Inject() {
    return $__annotations__.Inject;
  },
  get InjectLazy() {
    return $__annotations__.InjectLazy;
  },
  get InjectPromise() {
    return $__annotations__.InjectPromise;
  },
  get Provide() {
    return $__annotations__.Provide;
  },
  get ProvidePromise() {
    return $__annotations__.ProvidePromise;
  },
  get SuperConstructor() {
    return $__annotations__.SuperConstructor;
  },
  get TransientScope() {
    return $__annotations__.TransientScope;
  },
  __esModule: true
};