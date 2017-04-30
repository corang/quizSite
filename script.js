var myApp = angular.module('Quiz', []);

myApp.controller('Question', ['$scope', function ($scope) {
    var question1 = ['answer 1', 'answer 2', 'answer 3', 'answer 4'];
    var question2 = ['2answer 1', '2answer 2', '2answer 3', '2answer 4'];

    $scope.questions = [];
    $scope.questions[0] = ['test question', question1, 1];
    $scope.questions[1] = ['test question2', question2, 3];
    $scope.currentQuestion = 0;

    $scope.checkAnswer = function () {

    }
}]);