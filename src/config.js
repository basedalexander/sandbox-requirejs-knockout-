require.config({
  baseUrl: 'src',
  deps: ['main'],
  enforceDefine: true,

  paths: {
    'ko': '../external/knockout.min',
    'jquery': '../external/jquery.min',
    'smokesignals': '../external/smokesignals',
    'text': '../external/text',
    'i18n': '../external/i18n',
    'views': '../views'
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


define();