require([
  'text!../views/app.html',
  'view-models/app',
  'renderer'
], function (appView, App, renderer) {
  'use strict';


  var container = document.body,
      viewModel = new App();

  renderer.render(container, appView, viewModel);
});

define();