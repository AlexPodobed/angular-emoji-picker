'use strict';

angular.module('vkEmojiUiBootstrapExample', [
  'ngMessages',
  'vkEmojiPicker',
  'ui.bootstrap',
  // 'template/popover/popover-template.html'
]).controller('EmojiController', [
  '$scope', function ($scope) {
    $scope.post = {
      author: '',
      title: '',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... :smile: :thumbsup: :sushi:'
    };
  }
]);
