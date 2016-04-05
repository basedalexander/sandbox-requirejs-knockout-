require.config({
  baseUrl: 'src',
  deps: ['main'],
  enforceDefine: true,

  paths: {
    'ko': '../external/knockout.min',
    'jquery': '../external/jquery.min',
    'smokesignals': '../external/smokesignals',
    'text': '../external/text'
  },
  shim: {
    'smokesignals': {
      exports: 'smokesignals'
    },
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

define();