require.config({
  baseUrl: '../src',
  paths: {
    'jasmine': '../test/lib/jasmine-2.4.1/jasmine',
    'jasmine-html': '../test/lib/jasmine-2.4.1/jasmine-html',
    'boot': '../test/lib/jasmine-2.4.1/boot',
    'spec': '../test/spec'
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
    window.onload();
  });
});
