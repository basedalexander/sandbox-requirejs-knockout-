require.config({
  baseUrl: 'external',
  paths: {
    ko: '../external/knockout.min',
    jquery: '../external/jquery.min'
  },
  shim: {
    'not-amd': {
      deps: ['jquery'],
      exports: 'foo'
    }
  }
});
//
//require(['main'], function (main) {
//  'use strict';
//
//  main.init();
//});