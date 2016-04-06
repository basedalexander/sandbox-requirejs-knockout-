define(['ko'], function (ko) {
  'use strict';

  function render(container, view, viewModel) {

    console.log('viewModel is ' , viewModel);
    var intermediateContainer = document.createElement('div');

    intermediateContainer.innerHTML = view;
    container.appendChild(intermediateContainer);

    ko.applyBindings(viewModel, container);
  }

  return {
    render: render
  }
});