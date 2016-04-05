(function () {

  foo = {
    bar: function () {
      $(document.body).append('<div>this is a not-amd module</div>');
    }
  }
})();