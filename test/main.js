require.config({
  baseUrl: '../src',
  paths: {
    'spec': '../test/spec',
    'jasmine': '../test/lib/jasmine-2.4.1/jasmine',
    'jasmine-html': '../test/lib/jasmine-2.4.1/jasmine-html',
    'boot': '../test/lib/jasmine-2.4.1/boot',
    'task': '../test/mocks/task'
  },
  shim: {
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'window.jasmineRequire'
    },
    'boot': {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'window.jasmineRequire'
    }
  }
});

var specs = [
  'spec/task-manager'
];

require(['boot'], function () {
  require(specs, function () {

    //trigger Jasmine
    window.onload();
  });
});
