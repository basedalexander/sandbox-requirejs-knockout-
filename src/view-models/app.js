define(['ui-strings', 'ko'], function (uiStrings, ko) {
  'use strict';

  function App () {
    this.title = uiStrings.welcome;
    this.createText = uiStrings.createText;
    this.placeholderText = uiStrings.placeholderText;
    this.noListsText = uiStrings.noListsText;
    this.loadText = uiStrings.loadText;

    this.enableAdd = ko.observable(false);
    this.enableLoad = ko.observable(false);

    this.listName = ko.observable('sdfsdf');

    this.isButtonEnabled = ko.computed(function () {

    });
  }

  return App;
});