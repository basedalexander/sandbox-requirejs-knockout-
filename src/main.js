//define(['task-manager'], function (taskManger) {
//  'use strict';
//
//  return {
//    init: function () {
//      console.log(taskManger.createTask('dick'));
//    }
//  }
//});

require(['task-manager'], function (taskManger) {
  'use strict';

  return {
    init: function () {
      console.log(taskManger.createTask('dick'));
    }
  }
});