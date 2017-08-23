'use strict';

angular.module('vkEmojiUiBootstrapExample', [
  'ngMessages',
  'vkEmojiPicker',
  'ui.bootstrap',
  // 'template/popover/popover-template.html'
]).controller('EmojiController', [
  '$scope', function ($scope) {

    $scope.open = false;
    $scope.togglePopover = function () {
        $scope.open = !$scope.open;
    };
    $scope.post = {
      author: '',
      title: '',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... :smile: :thumbsup: :sushi:'
    };
  }
]);
